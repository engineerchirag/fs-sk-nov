const names = ['atul', 'kavya', 'sandhiya'];

// ['ATUL', 'KAVYA', 'SANDHIYA']

function convertToUpperCase(listOfNames) {
    // code goes here
    const result = [];
    for(let i = 0; i < listOfNames.length; i++) {
        result.push(listOfNames[i].toUpperCase());
    }
    return result;
}

console.log(convertToUpperCase(names));
console.log(names);