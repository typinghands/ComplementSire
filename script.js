// Array's containing the elements of the "ultimate insult generator: https://i.imgur.com/wqDtqUj.jpg
var firstA = ["beautiful", "sophisticated", "poetic", "noble", "talented", "brilliant", "powerful", "perfect", "cunning", "chestnut-haired", "thoughtful", "kind", "rule-breaking", "glowing", "sweet", "innocent", "pretty", "intoxicatingly", "hair-whippingly", "degree-getting", "strong ankled", "fresh-laundry smelling", "doe eyed", "musky smelling", "mentally strong", "ineffably charming", "oh my, so bold", "Excuse me, is it me or are you...", "Can I just say EXQUISITE?!", "Great explanatory powered", "Incredibly focused", "Emotionally Unattackable", "The most mature"];

var secondA = ["charmingly attractive", "so darn likeable", "ineffably affable", "considerate", "understanding", "generous", "shining example of a", "good working", "nice smelling", "self-disciplined", "mischief smelling", "pageant winning", "proactive thinking", "practical minded", "dependable", "hardworking", "adaptable", "trustworthy", "quick-witted", "observant", "magnetically attractive", 'Superbrained', "insightful", "attractively dangling", "algorithmically gorgeous", "stochastically improbable", "deterministically gorgeous", "beautiful devil", "round and soft", "pointy and sharp", "blue like the ocean"];

var thirdA = ["newborn messiah", "land mermaid", "musky wonderland", "sunflower", "unicorn-nurse", "hottie", "TASTY sunfish", "hunk of a person", "sun Divinity", "tropical wonder", "Greek God", "Superman double", "Olympic gold medalist", "teddy bear", "Captain You Sparrow", "talent scout's wet dream", "First Winner Prize", "Renaissance painting", "3 Starred Michelin Restaurant", "Nobel Winning Diplomat", "part-time model", "collectionist's piece", "trophy wife", "Einstein Competitor", "Horcrux Chosen One", "Feng Shui masterpiece", "Magnum opus", "Pure-Aura-Owner", "Extreme Explanation", "42", "Beautiful Pagan", "Raven Matrix Completioner", "Myer Briggs Portent", "Goodhood Candidate", "Chosen One", "Well functioning Microwave Oven", "Dorian Gray Painting"];

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
 
  var newMessage = "\n" + randFirstCapital + ",  " + randSecond + " — " + randThird + "!\n" + "";
  
  complementArea.innerHTML = complementArea.innerHTML + newMessage;
  // after first compliment payed - button txt changes
  
    buttonClick.innerHTML = "Certainly! I shall compliment thee an additional time!";

};

//clearing html of any existing compliments  
buttonResetClick.onclick = function resetCompliment() {
    document.getElementById("complementArea").innerHTML = " ";  
};
