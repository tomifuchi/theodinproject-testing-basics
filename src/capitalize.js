function capitalize(str) {
	if(typeof str != 'string') {
		throw new Error('Not a string');
	}
	let capStr = '';
	for(let i = 0;i < str.length; i++) {
		let currentCode = str.charCodeAt(i);
		//A to Z and a to z excluding anything in between 
		if(currentCode >= 97 && currentCode <= 122) {
			capStr += String.fromCharCode(currentCode - 32);
		} else capStr +=str[i];
	}
	return capStr;
}

module.exports = {capitalize}
