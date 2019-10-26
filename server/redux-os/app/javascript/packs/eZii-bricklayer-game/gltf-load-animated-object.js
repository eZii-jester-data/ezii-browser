import * as THREE from 'three';

import { GLTFLoader } from '../gltf/jsm/loaders/GLTFLoader.js';



export default class GltfLoadAnimateObject {
	constructor(scene) {
		this.scene = scene;
	}
	
	async addObject(megaOsGltfModelId) {
		let promise = new Promise((resolve, reject) => {
			this.addObjectInner(megaOsGltfModelId, resolve, reject);
		});
	
		return promise;
	}
	
	addObjectInner(id, resolve, reject) {
		let loadingManager = new THREE.LoadingManager();
	
		loadingManager.getHandler = function(arg) { console.log(arg) }
	
		loadingManager.setURLModifier( ( url ) => {
			console.log(url);
			let regex =  `/gltf_models/${id}` // §
		
			if(!(url.match(regex))) {
				url = url.replace('/gltf_models/', `/gltf_models/${id}/`);
			}
			console.log(url);
		
			return url;

		});
	
		var loader = new GLTFLoader(loadingManager);
	
		// manager.addHandler( /\.tga$/i, new TGALoader() );

		loader.load( `/gltf_models/${id}.gltf`, ( gltf ) => {
			// gltf.scene.position.y = 0.5;
		
			var object = gltf.scene;
			var animations = gltf.animations;				
					
			var mixer;
			let errorMessage = `No animations provided in gltf /gltf_models/${id}`;
			(animations && animations.length) ? mixer = new THREE.AnimationMixer( object ) : console.warn(errorMessage);
		
			if ( animations && animations.length ) {
								for ( var i = 0; i < animations.length; i ++ ) {
									var animation = animations[ i ]
									var action = mixer.clipAction( animation );
									action.play();
								}
							}
						
				
			this.scene.add( object );
		
		
			console.log(object);
			console.log(mixer);
						
			resolve([object, mixer]);
		},

		// called while loading is progressing
		function ( xhr ) {
		
			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );
			console.log( error );
			reject(error);

		}

	 );
	}
}
