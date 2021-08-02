const FIRST_SEQUENCE = [-2, 0, 1, 3, 3.5];
const SECOND_SEQUENCE = [-3, -2, -1, -0.4, -0.3, 0, 1, 3, 5.2, 8, 11];

function sortArray(array) {
	return array.sort((a,b) => {
		iterations++;
		return a-b;
	});
}

function mergeArrays (arr1, arr2) {
	let iterations = 0;
	let mergedArray = [];
	let index1 = index2 = 0; 

	while (index1 < arr1.length && index2 < arr2.length) {
		(arr1[index1] > arr2[index2]) ? mergedArray.push(arr2[index2++]) : mergedArray.push(arr1[index1++]);
		iterations++;
	}

	(index1 < arr1.length) ? mergedArray = mergedArray.concat(arr1.slice(index1)) : mergedArray = mergedArray.concat(arr2.slice(index2));

	console.log(iterations);
	return mergedArray;
}


console.log(mergeArrays(FIRST_SEQUENCE, SECOND_SEQUENCE).join(", "));