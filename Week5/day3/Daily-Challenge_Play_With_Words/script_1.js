// 1rst Daily Challenge

makeAllCaps = (arr) => {
    return arr.map((e) => e.toUpperCase());
  };
  
  sortWords = (array) => {return array.sort()};
  
  //testing
  Promise.resolve(["strawberries", "bananas", "chocolate"])
    .then(makeAllCaps)
    .then(sortWords)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));