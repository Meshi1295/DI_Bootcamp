// Daily Challenge: Car Inventory

// Part I

//1.  Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// 2. The function should
// loop through the array of object and return the first car with the name “Honda”.
// 3. then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  function getCarHonda (carInventory){
      for (let car of inventory){
          if( car.car_make === carInventory ){
            return car;

          }
      }
  }
  console.log(getCarHonda('Honda'));


let found = inventory.find(e => {
let sentence =  e.car_make === 'Honda' ? `This is a ${e.car_make} ${e.car_model} from ${e.car_year}` : null
    
    console.log(sentence);
});




// part 2 
inventory.sort((firstEl, secondEl) =>{
    return firstEl.car_year - secondEl.car_year
  })
  console.log(inventory);


    
    
    

    
