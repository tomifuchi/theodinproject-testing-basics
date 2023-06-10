const error_msg = 'Not of type string';

const caesarCipher = function(msg, shift) {
	if(checkInputIfStr(msg)) {
		let encoded_msg = [];
		for(let i = 0, j = 0;i < msg.length;i++){
			if( (msg[i] >= 'A' && msg[i] <= 'Z') || (msg[i] >= 'a' && msg[i] <= 'z') ){
				let capital = (msg[i] >= 'A' && msg[i] <= 'Z') ? 'A':'a';
				let wrap = (msg.charCodeAt(i) - capital.charCodeAt(0) + shift);
				if(wrap > 25){
					wrap -= 26*Math.floor(wrap/26);
				} else if (wrap < 0){
					wrap += 26*(Math.ceil(Math.abs(wrap)/26));
				}
				encoded_msg[j++] = String.fromCharCode(capital.charCodeAt(0) + wrap);
			} else {
				encoded_msg[j++] = msg[i];
			}
		}
		return encoded_msg.join("");
	} else throw Error(error_msg);
};

function checkInputIfStr(msg) {
	return typeof msg === 'string';
}


// Do not edit below this line
module.exports = {caesarCipher};
