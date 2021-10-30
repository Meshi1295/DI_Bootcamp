// Prior to ES6, JavaScript had no concepts of classes. 
// To mimic a class, you often use the constructor/prototype pattern
// Classes are said to be the "syntactic sugar" of Constructor functions.
// make things easier to read, but doesn't introduce anything new 
// As in, Classes are an easier way of writing Constructor functions.

// class Character {
//     constructor(wizardname, wizardhouse, isWizardGoodStudent) {
//       this.name = wizardname;
//       this.house = wizardhouse;
//       this.goodstudent = isWizardGoodStudent;
//     }
  
//       greeting(sentence="hohoho") {
//           return `Hello everyone, my name is ${this.name}, my favorite sentence is ${sentence}`
//       }
//   }
  
  // An object instance of the class Character
  // The constructor() method is called automatically by new
  
//   const goodWizard = new Character("Hermione", "Gryfindor", true);
//   console.log(goodWizard)
//   console.log(goodWizard.greeting("abracadabra"))


// -----------------
//   Inheritance
//-------------------
// Subclasses - Inheritance
// -------------------

// class Character {
//   constructor(wizardname, wizardhouse, isWizardGoodStudent) {
//     this.name = wizardname;
//     this.house = wizardhouse;
//     this.goodstudent = isWizardGoodStudent;
//     this.friends = ["Harry", "Hagrid"];
//   }

//   greeting(sentence="hohoho") {
//   	return `Hello everyone, my name is 
//     ${this.name}, my favorite sentence is ${sentence}`
//   }
// }

//subclass or child class
// class MainCharacter extends Character {
// 	  constructor(wizardname, wizardhouse, isWizardGoodStudent, money) {
//         super(wizardname, wizardhouse, isWizardGoodStudent);
//         this.earnMoney = money;
//     }

//     showingOff() {
//         return `I have ${this.earnMoney} - I'm rich`;
//     }

//     greeting() {
//        return `${super.greeting("abracadabra")}, I don't greet anyone because I'm rich`
//     }
// }

// const otherWizard = new Character("Harry", "Gryfindor", false)
// console.log(otherWizard);

// const goodWizard = new MainCharacter("Hermione", "Gryfindor", true, 10000);
// console.log(goodWizard.name)
// console.log(goodWizard);
// console.log(goodWizard.greeting())



// //Exercise 
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default


class TV {
constructor(channel = 1, volume = 50, brand){
    this.brand = brand
    this.channel = channel
    this.volume = volume

    }
    increase(){ this.volume ++ }
    decrease(){ this.volume -- }
      
}


const lgObj = new TV(3, 40, "hi")
lgObj.increase();
console.log(lgObj.volume);
// console.log(lgObj);
// console.log(lgObj.increase());




class Smart extends TV {
    constructor(channel , volume , brand){
        super(channel , volume , brand);
        this.netflix = true
    }

    increase(){ this.volume += 10 }
}

const smartObj = new Smart(5,50,"meshi")
console.log(smartObj);
smartObj.increase();
console.log(smartObj.volume);


// Bonus for the TV class: NOT MANDATORY
// 1. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 2. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 3. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 4. It's useful to create that shows the status. It should return info about the TV status like: "Panasonic at channel 8, volume 75".