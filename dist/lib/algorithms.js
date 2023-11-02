"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
/**
 *
 * Returns a mutated sorted array using the bubble sort method
 *
 * @param {number[]} arr - Any Size
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=algorithms.js.map