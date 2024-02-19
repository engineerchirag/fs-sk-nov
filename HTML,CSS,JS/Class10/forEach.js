const getTotalBillAmount = (items) => {
    // imperative way
    let total = 0;
    for(let i = 0; i< items.length; i++) {
        total += items[i];
    }
    return total;
}

const bills = [100, 200, 100, 400];
// console.log(getTotalBillAmount(bills.slice()));

const getTotalBillAmount1 = (items) => { // [100, 200, 100, 400];
    // declarative way
    let total = 0;
    items.forEach(function(item, index) {
        total += item;
    })
    return total;
}

console.log(getTotalBillAmount1(bills.slice()));
