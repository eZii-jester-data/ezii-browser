// https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/loaders/KMZLoader.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

import {
	DefaultLoadingManager,
	FileLoader,
	Group,
	LoadingManager
} from "three";


import * as JSZip from 'jszip';

import { ColladaLoader } from "../loaders/ColladaLoader.js";

var KMZLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

};

KMZLoader.prototype = {

	constructor: KMZLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new FileLoader( scope.manager );
		loader.setPath( scope.path );
		loader.setResponseType( 'arraybuffer' );
		loader.load( url, function ( text ) {
			scope.parse( text ).then(function(data) {
				onLoad(data);
			});

		}, onProgress, onError );

	},

	setPath: function ( value ) {

		this.path = value;
		return this;

	},

	parse: function ( data ) {	
		let promise = new Promise(function(resolve, reject) {

			//
			// async
			JSZip.loadAsync( data ).then(function(zip) {

				function findFile( url ) {
				


					for ( var path in zip.files ) {
		
						if ( path.substr( - url.length ) === url ) {
		
							return zip.files[ path ];
		
						}
		
					}
		
				}

				var manager = new LoadingManager();
				manager.setURLModifier( function ( url ) {
		
					var image = findFile( url );
		
					if ( image ) {
		
						console.log( 'Loading', url );
		
						var blob = new Blob( [ image.asArrayBuffer() ], { type: 'application/octet-stream' } );
						return URL.createObjectURL( blob );
		
					}
		
					return url;
		
				} );

				if ( zip.files[ 'doc.kml' ] ) {
					zip.files[ 'doc.kml' ].async('string').then(function(content) {
						var xml = new DOMParser().parseFromString(content , 'application/xml' );

						var model = xml.querySelector( 'Placemark Model Link href' );
		
						if ( model ) {
		
							var loader = new ColladaLoader( manager );
							zip.files[ model.textContent ].async('string').then(function(content) {
								resolve(loader.parse(content));
							});
						}
					})
				} else {

					console.warn( 'KMZLoader: Missing doc.kml file.' );

					for ( var path in zip.files ) {

						var extension = path.split( '.' ).pop().toLowerCase();

						if ( extension === 'dae' ) {

							var loader = new ColladaLoader( manager );
											resolve(loader.parse( zip.files[ path ].asText() ));

						}

					}
					

					console.error( 'KMZLoader: Couldn\'t find .dae file.' );
					return { scene: new Group() };

				}
				

			}); // eslint-disable-line no-undef
			
		});


		return promise;
	}

};

export { KMZLoader };