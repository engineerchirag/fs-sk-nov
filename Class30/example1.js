const input = [{
    id: 1,
    type: "CREDIT",
    amount: 1000
}, {
    id: 1,
    type: "DEBIT",
    amount: 5000
}, {
    id: 1,
    type: "CREDIT",
    amount: 1000
}, {
    id: 1,
    type: "CREDIT",
    amount: 10000
}, {
    id: 1,
    type: "DEBIT",
    amount: 2000
}];


const output = {
    CREDIT: 12000,
    DEBIT: 7000
}

const result = input.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + item.amount;
    return acc;
}, {});
