

var validateParameterTypeDatePattern = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" || isPlainObject( value ),
		"String or plain Object"
	);
};

