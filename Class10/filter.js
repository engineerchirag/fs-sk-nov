function filterNamesWithAChar(listOfNames, ch) {
    // 1. Create new array
    // 2. Loop through arr
    // 3. Check if word contains given char & push to new array
    // 4. Return new array

    // const result = [];
    // listOfNames.forEach(function(item, idx) {
    //     if (item.includes(ch)) {
    //         result.push(item);
    //     }
    // });
    // return result;


    const result = listOfNames.filter(function(item, idx) {
        return item.includes(ch);
    })

    return result;

}

const names = ['atul', 'kavya', 'sandhiya'];
console.log(filterNamesWithAChar(names, 'y'));