
let student = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
  getEmail: function () {
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  }
};

let teacher = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 35,
  getEmail: function () {
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  }
};

let manager = {
    firstName: "Vzade",
  lastName: "Rogers",
  age: 35,
}

const getRasikaEmail = student.getEmail;
getRasikaEmail(); // 1. undefined.undefined@gmail.com

student.getEmail(); // 2. Adam.Smith@gmail.com

teacher.getEmail();  // 3. Steve.Rogers@gmail.com


student.getEmail.call(teacher); // 4. Steve.Rogers@gmail.com
student.getEmail.call(manager); // 5. Vzade.Rogers@gmail.com

const getLavanyaEmail = student.getEmail.bind(teacher);

getLavanyaEmail(); // Steve.Rogers@gmail.com

const getVinethaEmail = getLavanyaEmail.bind(manager);
getVinethaEmail(); // Steve.Rogers@gmail.com