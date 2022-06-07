const jscards = [
    {name : "Java" ,
     img: 'java.png'},

    {name : "JS",
      img:'js.png'},
    
      {name : "SQL",
     img: 'sql.png' },

     {name : "CSS",
     img:'css.png'},

     {
         name: "Python",
         img : "python.png"
     } ,

     {
         name : "HTML",
         img: "html.png"
     } ,
     {name : "Java" ,
     img: 'java.png'},

    {name : "JS",
      img:'js.png'},
    
      {name : "SQL",
     img: 'sql.png' },

     {name : "CSS",
     img:'css.png'},

     {
         name: "Python",
         img : "python.png"
     } ,

     {
         name : "HTML",
         img: "html.png"
     }


]
//math random to randomize the cards in the array
jscards.sort(()=> 0.5 -  Math.random());

const cardbox = document.querySelector(".mainbox");
let playGround = [];
let chosenCardsIDS = [];
const cardsWon = [];

function createBox () {

    for(let i = 0; i < jscards.length; i++) {

        const card = document.createElement('img')
        card.setAttribute('src', 'hidden.png')
        card.setAttribute('data-id',i);
        card.addEventListener("click",flipTheCard)
        cardbox.append(card);
        

    }

}


createBox();

function checkIt() {

   const flippedCards = document.querySelectorAll('img')
   const optionOne = chosenCardsIDS[0];
   const optionTwo = chosenCardsIDS[1];

   if (optionOne == optionTwo){
       alert("Same image clicked");
   }

    if(playGround[0] == playGround[1]) {
        alert("match");
        flippedCards[optionOne[0]].setAttribute('src','hidden.png');
        flippedCards[chosenCardsIDS[1]].setAttribute('src','hidden.png');
        flippedCards[optionTwo[0]].removeEventListener('click',flipTheCard);
        flippedCards[chosenCardsIDS[1]].removeEventListener('click',flipTheCard);
        cardsWon.push[playGround];



    }
    playGround = [];
    chosenCardsIDS = [];


}

function flipTheCard() {
    let cardID = this.getAttribute('data-id');
    
  
    playGround.push( jscards[cardID].name);
    chosenCardsIDS.push(cardID);
    
    this.setAttribute('src',jscards[cardID].img);

    if (playGround.length === 2) {
        setTimeout(checkIt , 500);
    }

}
