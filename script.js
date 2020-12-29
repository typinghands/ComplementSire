// Array's containing the elements of the "ultimate insult generator: https://i.imgur.com/wqDtqUj.jpg
var firstA = ["beautiful", "sophisticated", "poetic", "noble", "talented", "brilliant", "powerful", "perfect", "cunning", "chestnut-haired", "thoughtful", "kind", "rule-breaking", "glowing", "sweet", "innocent", "pretty", "intoxicatingly"];

var secondA = [", charmingly attractive", ", so darn likeable", ", ineffably affable", ", considerate", ", understanding", ", generous", ", shining example of a", ", good working", ", nice smelling", ", self-disciplined", ", mischief smelling", ", pageant winning", ", proactive thinking", ", practical minded", ", dependable", ", hardworking", ", adaptable", ", trustworthy", ", quick-witted", ", observant", ", magnetically attractive"];

var thirdA = ["newborn baby", "land mermaid", "musk ox", "sunflower", "unicorn-nurse", "hottie", "sunfish", "hunk of a person", "sun Divinity", "tropical fish", "Greek God", "Superman double", "Olympic gold medalist", "teddy bear", "Captain You Sparrow", "talent scout's wet dream", "prized collection", "Renaissance painting", "3 Starred Restaurant", "Nobel Winning Diplomat", "part-time model" ];

var buttonClick = document.getElementById("complimentGenerator");

var buttonResetClick = document.getElementById("compimentReset");

buttonClick.onclick = function() {
   document.getElementById("complementArea").innerHTML = " ";
   // getting random values from each array
  var randFirst = firstA[Math.floor(Math.random() * firstA.length)];

  var randSecond = secondA[Math.floor(Math.random() * secondA.length)];

  var randThird = thirdA[Math.floor(Math.random() * thirdA.length)];
  
  // capitalizing the first letter
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    }
  
  randFirstCapital = randFirst.capitalize();
  
  //adding complement back to the html
  var addCompliment = document.getElementById("complementArea");
 
  var newMessage = "\n" + randFirstCapital + "" + randSecond + " " + randThird + "!\n" + "";
  
  complementArea.innerHTML = complementArea.innerHTML + newMessage;
  // after first compliment payed - button txt changes
  
    buttonClick.innerHTML = "Certainly! I shall compliment thee an additional time!";

};

//clearing html of any existing compliments  
buttonResetClick.onclick = function resetCompliment() {
    document.getElementById("complementArea").innerHTML = " ";  
};
