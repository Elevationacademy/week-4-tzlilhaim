// Exercise 1:
const validator = require("validator")

// 1.1.
const fakeEmail = "shoobert@dylan"
console.log(validator.isEmail(fakeEmail))

//1.2.
const validUsPhoneNum = "786-329-9958"
const usLocale = "en-US"
console.log(validator.isMobilePhone(validUsPhoneNum, usLocale))

//1.3.
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist))

// =============================================================
// Exercise 2:
const faker = require("faker")

const makeHuman = function(num){
    const humans = []
    for (let i=0; i < num; i++){
        humans[i] = {name: faker.name.findName(), avatarImgUrl: faker.image.avatar() , companyName: faker.company.companyName()}
    }
    return humans
}

console.log(makeHuman(2))