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
		module.exports = factory( require( "cldrjs" ), require( "globalize" ) );
	} else {

		// Global
		factory( root.Cldr, root.Globalize );
	}
}(this, function( Cldr, Globalize ) {

var createError = Globalize._createError,
	objectExtend = Globalize._objectExtend,
	regexpEscape = Globalize._regexpEscape,
	stringPad = Globalize._stringPad,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterRange = Globalize._validateParameterRange,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
