function addContact1({name, phone, email="이메일없음", age=0}) {
    console.log(name, phone, email, age);
}
addContact1({ name:"이몽롱", phone:"01013434-8989" })

function addContact2(contact) {
    if (!contact.email) contact.email = "이메일없음";
    if (!contact.age) contact.age = 0;
    let { name, phone, email, age } = contact;
    console.log(name,phone,email,age);
}
addContact2({ name:"이몽롱", phone:"01013434-8989" })

function addContact3(name, phone, email="이메일없음", age=0) {
    console.log(name,phone,email,age);
}
addContact3("이몽룡","010-3434-8899")