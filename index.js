//generate first random number 1 - 6,
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  
//generate pretended dice1.png - dice6.png, the img file name
var randomDiceImage ="dice"+randomNumber1 +".png";  
//generate the img source: images/diec1.png - images/dice6.png
var randomImageSource ="images/" +randomDiceImage;  
// first to select all as have two img tag
// to target first img tag, use index [0]
var image1 =document.querySelectorAll("img")[0];  
//RESET the image1's attribute to randomimagesource
image1.setAttribute("src", randomImageSource);  


//generate Second random number 1 - 6,
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "dice"+randomNumber2 +".png";
var randomImageSource = "images/" +randomDiceImage;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector ("h2"). innerHTML ="👍Player 1 WIN";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector ("h2"). innerHTML ="Player 2 WIN👍";
}
else {
    document.querySelector ("h2"). innerHTML ="Draw😉"
}