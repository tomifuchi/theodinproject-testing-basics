function analyzeArray(arr) {
	if(arr.length == 0) return {};

	if(checkArr(arr)) {
		return {
			average: avg(arr),
			min: min(arr),
			max: max(arr),
			length: length(arr),
		}
	} else throw Error('Array is not of type number or has undefined in it');
}

function max(arr) {
	return arr.reduce((max, cur) => cur > max ? cur:max, arr[0]);
}

function min(arr) {
	return arr.reduce((min, cur) => cur < min ? cur:min, arr[0]);
}

function length(arr) {
	let n = 0;
	while(n < arr.length) n++;
	return n;
}

function avg(arr) {
	const sum = arr.reduce((acc, cur) => acc += cur,0);
	return sum / length(arr);
}

function checkArr(arr) {
	for(let i = 0;i < length(arr);i++){
		const el = arr[i];
		if(!(typeof el == "number" && typeof el !== undefined))
			return false;
	}
	return true;
}

module.exports = {analyzeArray}
