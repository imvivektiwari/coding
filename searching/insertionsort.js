const swap = (arr, i, j) => {
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let hole = i;
        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole - 1];
            hole--;
        }
        arr[hole] = value
    }
};

const main = () => {
    let arr = [10, 6, 3, 4, 5, 6, 1, 0, 9, 7]
    insertionSort(arr);
    console.clear();
    console.log(arr);
}

main();