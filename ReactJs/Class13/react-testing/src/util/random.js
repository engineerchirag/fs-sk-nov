export const sum = (...args) => {
    let total = 0;
    args.forEach((item) => {
        total += item;
    })

    return total;
}