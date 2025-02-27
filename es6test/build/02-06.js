"use strict";

function foodReport(name, age) {
  console.log(name + ", " + age);
  for (var _len = arguments.length, favoriteFoods = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }
  console.log(favoriteFoods);
}
foodReport("홍길돌", 18, "짜장면", "냉면", "불고기");
foodReport("이몽룡", 20, "초밥");