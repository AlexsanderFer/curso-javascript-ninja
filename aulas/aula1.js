let arr = [1, 2, 3, 4, 5];
let filter = arr.filter(function(item, index, array) {
    return item > 2
})

console.log(filter);