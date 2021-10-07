"use strict"

// Day Trip Generator
//3 commits with descriptive messages


//Arrays Needed

//Destination Randomly chosen
//Restaurant Randomly Chosen
//Transportation Randomly Chosen
//Entertainment Randomly Chosen

//Allow user to randomly reselect any of the above
//Allow user to confirm trip as complete if happy with selection
//Display completed trip in console
//All functions must be single responsibility

//Destination  let destinations = ['The Mall' , 'The Park' , 'Downtown' , 'Golf Course' , 'Bowling Alley' , 'The Lake' , 'Football Stadium' , 'Art Gallery' , 'Museum', 'Shooting Range'];
//Restaurant  let restaurants = ['Italian' , 'Tex Mex' , 'Chinese' , 'Korean' , 'Sushi' , 'Steakhouse' , 'Burgers' , 'Fast Food' , 'Seafood' , 'Sandwich Shop'];
//Transportation  let transportations = ['Car' , 'Walking' , 'Biking' , 'Taxi' , 'Horseback' , 'Motorcycle' , 'Jogging' , 'Ferry' , 'Boat' , Hitchhiking'];
//Entertainment let entertainments = ['Movie' , 'Shopping' , 'Playing Games' , 'Reading Books' , 'Playing Golf' , 'Bowling' , 'Target Practice' , 'Jet Skiing' , 'Wine Tasting' , 'People Watching'];


let destinations = ['the Mall' , 'the Park' , 'the pool' , 'the Golf Course' , 'the Bowling Alley' , 'the Lake' , 'the Football Stadium' , 'the Art Gallery' , 'the Museum', 'the Shooting Range'];

let restaurants = ['Italian' , 'Tex Mex' , 'Chinese' , 'Korean' , 'Sushi' , 'a Steak' , 'Burgers' , 'Fast Food' , 'Seafood' , 'at theSandwich Shop'];

let transportations = ['Car' , 'Walking' , 'Biking' , 'Taxi' , 'Horseback' , 'Motorcycle' , 'Jogging' , 'Ferry' , 'Boat' , 'Hitchhiking'];

let entertainments = ['watching a Movie' , 'Shopping' , 'Playing Games' , 'Reading Books' , 'Playing Golf' , 'Bowling' , 'Target Practicing' , 'Jet Skiing' , 'Wine Tasting' , 'People Watching'];

let randDest = randomizer(destinations);
console.log (randDest);

let randRest = randomizer(restaurants);
console.log (randRest);

let randTran = randomizer(transportations); 
console.log (randTran);

let randEnt = randomizer(entertainments);
console.log (randEnt);

function randomizer (Array) {
    return    Array[Math.floor(Math.random() * Array.length)];  
}
prompt("Press Any Key To Begin Your Trip Plan");
if (" "){
    console.log("We will go to " +  randDest + ", then we will eat " + randRest + ". We will get there by way of " + randTran + ", and finally, we will end the evening, " + randEnt + ".");
}

let answers = ['yes' , 'no'];

let unhappyAnswers = ['1' , '2' , '3' , '4' , '5'];

prompt("Would You Like To Use This Plan?");
if ('yes' === 'yes'){
  console.log("Enjoy your day trip!");

} else { ('no'=== 'no') 
     prompt("What part do you want to change? Input the corresponding number for a new answer. 1.Destination, 2.Restaurant, 3.Transportation, 4.Entertainment, or 5.All");

     }
if ('1' === '1'){
console.log (randomizer(destinations));
}
else if ('2' === '2'){
console.log (randomizer(restaurants));
}
else if ('3' === '3'){
console.log (randomizer(transportations));
}
else if ('4' === '4'){
console.log (randomizer(entertainments));
}
else if ('5' === '5'){
console.log ("We will go to " +  randDest + ", then we will eat " + randRest + ". We will get there by way of " + randTran + ", and finally, we will end the evening, " + randEnt + ".");
}
