// // 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

//1.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const result = nums.reduce(
  ([positiveCount, negativeSum], num) => {
    if (num > 0) {
      return [positiveCount + 1, negativeSum];
    } else if (num < 0) {
      return [positiveCount, negativeSum + num];
    }
    return [positiveCount, negativeSum];
  },
  [0, 0]
);
console.log(result);

//2

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const positiveCount2 = nums2.filter((num) => num > 0).length;
const negativeSum2 = nums2
  .filter((num) => num < 0)
  .reduce((sum, num) => sum + num, 0);

const result2 = [positiveCount2, negativeSum2];

console.log(result2);

//3
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

let positiveCount3 = 0;
let negativeSum3 = 0;

nums3.forEach((num) => {
  if (num > 0) {
    positiveCount3++;
  } else if (num < 0) {
    negativeSum3 += num;
  }
});

const result3 = [positiveCount3, negativeSum3];

console.log(result3);

// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

//1
const nums4 = [1, 22, 3, 42, 53, 64, 7, 80, 91, 14, 15, 16, 23, 44, 21];
const multipliedNums = nums4.map((num) => num * 2);
const divisibleByThree = multipliedNums.filter((num) => num % 3 === 0);
console.log(divisibleByThree);

//2
const nums5 = [1, 22, 3, 42, 53, 64, 7, 80, 91, 14, 15, 16, 23, 44, 21];

const result5 = [];

for (let i = 0; i < nums5.length; i++) {
  const multipliedNums2 = nums5[i] * 2;
  if (multipliedNums2 % 3 === 0) {
    result5.push(multipliedNums2);
  }
}
console.log(result5);

// 3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7
const nums6 = [1, 22, 3, 42, 53, 64, 7, 80, 91, 14, 15, 16, 23, 44, 21];

function sumOfSmallest(nums6) {
  const sortedNums = nums6.slice().sort((a, b) => a - b);
  const result6 = sortedNums[0] + sortedNums[1];
  return result6;
}

console.log(sumOfSmallest(nums6));

// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

//1
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

function getLargerNumbers(arr1, arr2) {
  return arr1.map((num, index) => Math.max(num, arr2[index]));
}

console.log(getLargerNumbers(arr1, arr2));

// 5) const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
// * Get an array of all names
// *  Get an array of all first names
// * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
// {blue: 2, brown: 1, yellow: 1}
// როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const names = characters.map((character) => character.name);

console.log(names);

const firtsNmae = characters.map((character) => character.name.split(" ")[0]);
console.log(firtsNmae);

const eyeColor = characters.reduce((acc, character) => {
  const { eye_color } = character;
  acc[eye_color] = (acc[eye_color] || 0) + 1;
  return acc;
},{});
console.log(eyeColor);
