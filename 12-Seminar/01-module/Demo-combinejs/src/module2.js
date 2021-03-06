function extend( obj ) {
	if ( !arguments[1] ) { return obj; }
	for ( var i=1, l=arguments.length, source, prop; i<l; i++ ) {
		source = arguments[i];
		if ( source.constructor !== Object ) { throw new Error('전달인자가 객체가 아닙니다.'); return; }
		for ( prop in source ) {
			if (
				( !obj[prop] && source.hasOwnProperty(prop) ) ||
				( prop in obj && prop in source )
			) { obj[prop] = source[prop]; }
		}
		return obj;
	}
}