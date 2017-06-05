//requiring built-in file system module to write/read txt file//
var fs = require("fs");
// requiring our BasicCard constructor function exported from BasicCard.js
var BasicCard = require("./BasicCard.js");
var userChoice = process.argv[2];   

var presidents = [
  {number: "zero", name: "placeholder"},
  {number: "first", name: "George Washington"},
  {number: "second", name: "John Adams"},
  {number: "third", name: "Thomas Jefferson"}
];

// constructor function for creating ClozeCard objects
function ClozeCard(fullText, cloze) { 
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(this.cloze, "...");
    this.printInfo = function() {
      console.log(this.partial);
  };
}

if (userChoice === "partial") {
  var random = Math.floor((Math.random() * 3) +1 );
  var presNum = presidents[random].number;
  var presName = presidents[random].name;
  var president = new ClozeCard(presName + " was the " + presNum + " president of the United States", presName);
    president.printInfo();

  fs.writeFile("UserOutput.txt", presName, function(error, data) {
    if(error) {
      console.log(error);
    }
  });
}

else if (userChoice === "cloze") { 
    fs.readFile("./UserOutput.txt", "utf8", function(error, data) {
      if(error) {
        console.log(error);
      }
      else if(data === "") {
        console.log("Please start with 'partial' before 'cloze'");
      }

      else {
      presName = data;
        console.log(presName);
      }   
    });
  }

// exporting BasicCard constructor that is required in ClozeCard.js
module.exports = ClozeCard;
