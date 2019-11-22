// Dependencies
// 1.) Data
// 2.) Routes
// 3.) Listen
// ===========================================================
var express = require("express");
const path = require('path');
var app = express();
var PORT = 3000;

// set up the express appto handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Data
// ===========================================================
const characters = [
{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
},
{
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}
];
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
// app is the server
// you can use get and post - post is when you want ot view something on the website
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'view.html'));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, 'add.html'));
});

// get all data
app.get('/api/characters',(req,res) => {
  return res.json(characters);

});


// the colon in here will notify that it is a variable in express
// to get access to the variable in the callback 
// get only one object from data
app.get('/api/characters/:character', (req, res) =>{
  const chosen = req.params.character;
  // find an object in the database based on route name
  const chosenOne = characters.filter(obj => {
    return obj.routeName === chosen;
  });
  if(chosenOne.length){
    return res.json(chosenOne[0]);
  }
  return res.send('character, i do not see.');
});
// add an object to the database
app.post('/api/characters', (req, res)=>{
  const newCharacter = req.body;
  console.log(newCharacter);

  newCharacter.routeName = newCharacter.name.replace(/\s+/g,'').toLowerCase();
  characters.push(newCharacter);
  res.json(newCharacter);
});


// app.get("/:character", function(req, res) {
//   const chosen = req.params.character;
//   console.log(chosen);
//   res.end();
// });


// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
