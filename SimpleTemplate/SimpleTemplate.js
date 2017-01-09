function simpleTemplate(format, objValues) {
	var regexFormat = /(\$\{[\s]*?(.*?)[\s]*?\})/g;
	var value = format;
	var matched;
	while (matched = regexFormat.exec(value)) {
		value = value.replace(matched[1], objValues[matched[2].trim()])
	}
	return value;
}