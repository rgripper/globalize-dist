/**
 * Globalize v@VERSION
 *
 * http://github.com/jquery/globalize
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: @DATE
 */
/*!
 * Globalize v@VERSION @DATE Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ) );
	} else {

		// Global
		root.Globalize = factory( root.Cldr );
	}
}( this, function( Cldr ) {
