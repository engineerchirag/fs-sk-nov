// const bills = [100, 200, 100, 400];

// const getTotalBillAmount1 = (items) => { // [100, 200, 100, 400];
//     // 1. Initialize with default value
//     // 2. Loop through array
//     // 3. Add item to accumulative value
//     // 4. Return accumulative value
//     // let total = 0;
//     // items.forEach(function(item, index) {
//     //     total += item;
//     // })
//     // return total;

//     const total = items.reduce(function(acc, item) {
//         acc += item;
//         return acc;
//     }, 0);

//     return total;

// }

// console.log(getTotalBillAmount1(bills));




const data = [['name', 'Rajeev'], ['city', 'Bangalore'], ['age', 20]];

// OUTPUT: {
//     name: 'Rajeev',
//     city: 'Bangalore',
//     age: 20,
// };

// Use: Reduce

function convertIntoObj(arr) {
    return arr.reduce(function(acc, item) {
        const key = item[0];
        const val = item[1];
        acc[key] = val;
        return acc;
    }, {});
}

console.log(convertIntoObj(data))