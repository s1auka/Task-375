const MIN_MATRIX_SIZE = 5;
const MAX_MATRIX_SIZE = 10;
	
const MAX_MATRIX_ELEMENT_BY_MODULE = 50;

let matrixSizes = getMatrixSizes(MIN_MATRIX_SIZE, MAX_MATRIX_SIZE);
let matrix = createMatrix(matrixSizes, MAX_MATRIX_ELEMENT_BY_MODULE);
let divider = getMaxElemInMatrixByModule(matrix);
let dividedMatrix = divideMatrixElem(matrix, divider);

function getMatrixSizes(minSize, maxSize) {	
	let n = minSize + Math.floor(Math.random() * (maxSize - minSize));
	let m = minSize + Math.floor(Math.random() * (maxSize - minSize));

	return [n,m];
}

function getMatrixElement(maxElementByModule) {
	let elem = Math.floor(Math.random() * maxElementByModule);

	return Math.random() > 0.5 ? elem : elem/(-1); //add elems < 0
}

function createMatrix([size1, size2], maxElem) {
	let matrix = Array(size1).fill().map(() => Array.from({length: size2}, () => getMatrixElement(maxElem)));

	return matrix;
}

function getMaxElemInMatrixByModule(matrix) {
	let maxElem = Math.max(...matrix.map( raw => Math.max(...raw)));
	let minElem = Math.min(...matrix.map( raw => Math.min(...raw)));

	return maxElem > Math.abs(minElem) ? maxElem : Math.abs(minElem);
}

function logMatrix(matrix) {
	matrix.map( row => console.log(row.join(",")));
	return "";
}

function divideMatrixElem(matrix, divider) {
	let dividedMatrix = [...matrix.map( raw => [...raw.map( el => el/divider)])];

	return dividedMatrix;
}

logMatrix(matrix);
logMatrix(dividedMatrix);
