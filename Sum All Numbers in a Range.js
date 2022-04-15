function sumAll(arr) {
    let sum = 0
    if (arr[0] > arr[1]) {
        sum = arr[0]
        arr[0] = arr[1]
        arr[1] = sum
        sum = 0
    }
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i
    }
    return sum
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));