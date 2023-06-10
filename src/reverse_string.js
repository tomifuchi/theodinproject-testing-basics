function reverse_string(str, revStr='') {
	if(str.length <= 0) {
		return revStr;
	}
	revStr += str[str.length - 1];
	return reverse_string(str.slice(0, str.length - 1), revStr);
}

module.exports = {reverse_string};
