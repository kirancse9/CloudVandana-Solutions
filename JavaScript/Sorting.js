function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}


const originalArray = [5, 2, 8, 1, 7];
const sortedArray = sortArrayDescending(originalArray);

console.log("Original array: " + originalArray);
console.log("Sorted array in descending order: " + sortedArray);