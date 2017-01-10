function simpleTemplate(format, objValues) {
	/* 
		(In pug.js)
		When use flag g, 
		the lastIndex property will be moved to the last location at the first time
		So remove the flag g.
	*/ 
	var regexFormat = /(\$\{[\s]*?(.*?)[\s]*?\})/;
	var value = format;
	var matched;
	while (matched = regexFormat.exec(value)) {
		value = value.replace(matched[1], objValues[matched[2].trim()])
	}
	return value;
}