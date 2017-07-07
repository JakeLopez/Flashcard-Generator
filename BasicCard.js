// var CloseCard = require("./ClozeCard.js")

//Basic Card constructor 
function BasicCard(front,back){
    this.cards = [];
    this.front = front;
    this.back = back;

this.printCard = function(){
console.log("Question: " + this.front + "\nAnswer : " + this.back);
};

}
//this will use the basic card constructor to create a flash card
var Accumulator = new BasicCard("A variable that keeps a running total.", "Accumulator");
var InfiniteLoop = new BasicCard("A loop that has no way of ending and repeats until the program is interrupted.","Infinite Loop");
var Sentinal = new BasicCard("A special value that signals when there are no more items from a list a list of items to be processed. This value cannot be mistaken as an item from the list.", "Sentinal" );

//uses the printCard function to display the new card
Accumulator.printCard();
InfiniteLoop.printCard();
Sentinal.printCard();





//

module.exports = BasicCard;