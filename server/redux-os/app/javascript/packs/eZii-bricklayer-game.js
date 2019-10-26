
// import * as THREE from '../build/three.module.js';


import * as THREE from 'three';
import { GLTFLoader } from './gltf/jsm/loaders/GLTFLoader.js';

import { OrbitControls } from './kmz/jsm/controls/OrbitControls.js';

$(function() {
	
	
	
	var notFound = true;
	var i = 0;
	while(notFound) {
		var docking = document.body.querySelector('#docking-point-for-threejs');
		console.log(docking);
		if(!docking) {
			i++;
			if (i < 40) { continue } else { break };
		} else {
			notFound = false;
		}
	
		var camera, scene, renderer;
		var cube, cube2, cube3;
		var gltf, background, envMap, mixer, gui, extensionControls, controls;
		var clock = new THREE.Clock();

		function init() {

			scene = new THREE.Scene();
		
			var geometry = new THREE.BoxGeometry( 100, 100, 10 );
			var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
		
			// §
			cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
		
			var geometry2 = new THREE.BoxGeometry( 100, 100, 10 );
			var material2 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
		
			// §
			cube2 = new THREE.Mesh( geometry2, material2 );
			scene.add( cube2 );
		
			scene.background = new THREE.Color( 0x999999 );
			var light = new THREE.DirectionalLight( 0xffffff );
			light.position.set( 0.5, 1.0, 0.5 ).normalize();
			scene.add( light );
			camera = new THREE.PerspectiveCamera( 35, docking.clientWidth / docking.clientHeight, 1, 500 );
			camera.position.y = 5;
			camera.position.z = 10;
			scene.add( camera );
			var grid = new THREE.GridHelper( 50, 50, 0xffffff, 0x555555 );
			scene.add( grid );
			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( docking.clientWidth, docking.clientHeight );
			docking.appendChild( renderer.domElement );
		

		    controls = new OrbitControls( camera, renderer.domElement );
			// controls.addEventListener( 'change', render );
			controls.update();
			window.addEventListener( 'resize', onWindowResize, false );
		}
		function onWindowResize() {
			camera.aspect = docking.clientWidth / docking.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( docking.clientWidth, docking.clientHeight );
			render();
		}
		
		function render() {
			renderer.render( scene, camera );
		}


		function moveObjectZAxis(object) {
			object.position.z += 10;
		}
		
		function addObject() {			
			let loadingManager = new THREE.LoadingManager();
			
			loadingManager.getHandler = function(arg) { console.log(arg) }
			
			
			var loader = new GLTFLoader(loadingManager);
			
			// manager.addHandler( /\.tga$/i, new TGALoader() );
		
			loader.load( '/gltf_models/2.gltf', function ( gltf ) {
				// gltf.scene.position.y = 0.5;
				
				var object = gltf.scene;
				var animations = gltf.animations;				
				
				console.log(animations.length);
				
				
				if ( animations && animations.length ) {
									mixer = new THREE.AnimationMixer( object );
									for ( var i = 0; i < animations.length; i ++ ) {
										var animation = animations[ i ]
										var action = mixer.clipAction( animation );
										action.play();
									}
								}
								
						
				scene.add( object );
				
				
				console.log(object);
								
								
			},
		
			// called while loading is progressing
			function ( xhr ) {

				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

			},
			// called when loading has errors
			function ( error ) {

				console.log( 'An error happened' );
				console.log( error );
				

			}
		
		 );
		}
		
		function animate() {
					requestAnimationFrame( animate );
					if ( mixer ) mixer.update( clock.getDelta() );
					controls.update();
					render();
		}

		init();
		moveObjectZAxis(cube2);
		addObject();
		animate();
		
	}
});
