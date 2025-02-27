function addContact(name, mobile, home="none", address="none", email="none") {
    var str = `name=${name}, mobile=${mobile}, home=${home}, ` +
            `address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-222-3331")
addContact("이몽룡", "010-223-2233", "02-345-6666", "서울시");