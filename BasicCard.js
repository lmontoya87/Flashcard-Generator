//requiring built-in file system module to write/read txt file//
var fs = require("fs");
var ClozeCard = require("./ClozeCard.js");
var userChoice = process.argv[2];

var presidents = [
  {number: "zero", name: "placeholder"},
  {number: "first", name: "George Washington"},
  {number: "second", name: "John Adams"},
  {number: "third", name: "Thomas Jefferson"}
];

// constructor function for creating basic card object
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  this.printInfo = function() {
      console.log(this.front);
    };
  }  

if (userChoice ==="front") {
  var random = Math.floor((Math.random() * 3) +1 );
  var presNum = presidents[random].number;
  var presName = presidents[random].name;
  var president = new BasicCard("Who was the " + presNum + " president of the United States?", presName);
    president.printInfo();

  fs.writeFile("UserOutput.txt", presName, function(error, data) {
    if(error) {
      console.log(error);
    }
  });
}
else if (userChoice === "back") { 
    fs.readFile("./UserOutput.txt", "utf8", function(error, data) {
      if(error) {
        console.log(error);
      }
      else if(data === "") {
        console.log("Please start with the 'front' of the card");
      }
      else {
      presName = data;
        console.log(presName);
      }   
    });
  }
// exporting BasicCard constructor that is required in ClozeCard.js
module.exports = BasicCard;