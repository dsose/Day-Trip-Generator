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


let destinations = ['The Mall' , 'The Park' , 'Downtown' , 'Golf Course' , 'Bowling Alley' , 'The Lake' , 'Football Stadium' , 'Art Gallery' , 'Museum', 'Shooting Range'];

let restaurants = ['Italian' , 'Tex Mex' , 'Chinese' , 'Korean' , 'Sushi' , 'Steakhouse' , 'Burgers' , 'Fast Food' , 'Seafood' , 'Sandwich Shop'];

let transportations = ['Car' , 'Walking' , 'Biking' , 'Taxi' , 'Horseback' , 'Motorcycle' , 'Jogging' , 'Ferry' , 'Boat' , 'Hitchhiking'];

let entertainments = ['Movie' , 'Shopping' , 'Playing Games' , 'Reading Books' , 'Playing Golf' , 'Bowling' , 'Target Practice' , 'Jet Skiing' , 'Wine Tasting' , 'People Watching'];

let randDest = destinations[Math.floor(Math.random() * destinations.length)];
console.log (randDest);

let randRest = restaurants[Math.floor(Math.random() * restaurants.length)];
console.log (randRest);

let randTran = transportations[Math.floor(Math.random() * transportations.length)];
console.log (randTran);

let randEnt = entertainments[Math.floor(Math.random() * entertainments.length)];
console.log (randEnt);
