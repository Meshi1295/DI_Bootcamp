// Part I:
const number = async() => {
    try{
        const largeNumber = 356;
        return largeNumber

    } catch (e) {
        console.log(e);
    }

}

// Part II:

let time = function () {
    return new Date().toString();
  };



module.exports = {
    number,
    time
};