const person = {
    id : 2 ,
    gender : 'mail'
    };
const student = {
    
    name : "ravi" ,
    email :"ravi11@yopmail.com"
    };
const contact = Object.assign(person, student);

// another way with spread operator
// const contact = {...person, ...student};

console.log('contact', contact);