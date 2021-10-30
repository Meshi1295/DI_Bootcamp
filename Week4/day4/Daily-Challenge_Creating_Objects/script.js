// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor (title, uploader, time){

        this.theTitle = title,
        this.theUploader = uploader
        this.theTime = time
    }
    watch() {
        return `${this.theUploader} watched all ${this.theTime} of ${this.theTitle}!`;
    }
}

const sumVideo = new Video("harry potter", "Meshi", "60");








// Solution Daily Challenge
// class Video {
//   constructor(title, uploader, time){
//     this.title = title;
//     this.uploader = uploader;
//     this.time = time;
//     this.company = "Netflix";
//   }

//   watch (){
//     return `Uploader: ${this.uploader} Title: ${this.title} Time: ${this.time}`
//   }
// }

// const firstVideo = new Video("harry potter", "John", 60);
// console.log(firstVideo)
// console.log(firstVideo.title)
// console.log(firstVideo.watch())

// const secondVideo = new Video("star trek", "John", 60);
// console.log(secondVideo)
// secondVideo.time = 90
// console.log(secondVideo)