
const swap = (arr, i, j) => {
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}

const bubbleSort = (arr) => {

    for (let k = 1; k < arr.length; k++) {
        for (let i = 0; i < arr.length - k; i++) 
        {
            if (arr[i] > arr[i + 1])
            {
                swap(arr, i, i + 1);
            }
        }
    }

}

const main = () => {
    let arr = [10, 6, 3, 4, 5, 6, 1, 0, 9, 7]
    bubbleSort(arr);
    console.clear();
    console.log(arr);
}

main();