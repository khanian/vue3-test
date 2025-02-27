"use strict";

function addContact(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "none";
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "none";
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "none";
  var str = "name=".concat(name, ", mobile=").concat(mobile, ", home=").concat(home, ", ") + "address=".concat(address, ", email=").concat(email);
  console.log(str);
}
addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-223-2233", "02-345-6666", "서울시");