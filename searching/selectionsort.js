const getMinIndex = (arr, start) => {
    let min = arr[start];
    let minIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        let curr = arr[i];
        if (curr < min) {
            min = curr;
            minIndex = i;
        }
    }
    return minIndex;
}

const swap = (arr, i, j) => {
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = getMinIndex(arr, i);
        swap(arr, minIndex, i);
    }
    return arr;
}

const main = () => {
    let arr = [6, 3, 4, 5, 6, 1, 0, 9, 7]
    arr = selectionSort(arr);
    console.log(arr);
}
main();