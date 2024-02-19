var marriageBioData = {
    name: 'Atul',
    salary: 1000000,
    address: {
        city: 'Bangalore',
        pincode: 560067
    },
    skills: ["HTML", "JS", "CSS"],
    hello: function() {
        console.log('hello uncle!');
    },
    1: 'One'
};

// console.log(marriageBioData.name);
// console.log(marriageBioData['name']);
// console.log(marriageBioData.salary);
// console.log(marriageBioData['salary']);

// console.log(marriageBioData.address.city);
// console.log(marriageBioData['address']['city']);
// console.log(marriageBioData['address']['pincode']);

// console.log(marriageBioData.skills[1]);

// console.log(marriageBioData.hello());

// console.log(marriageBioData['1']);

marriageBioData.name = "Prasad";

marriageBioData.address.pincode = 110003;


delete marriageBioData.salary;
// console.log(marriageBioData);

// console.log(Object.keys(marriageBioData));
console.log(Object.values(marriageBioData));