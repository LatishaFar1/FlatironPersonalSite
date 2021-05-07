let MovieTV = document.getElementById("MovieTVbutton");
let result = document.getElementById("result")
//enter=entertainment//
let enter  = [
    "The Old Guard",
    "Rush Hour",
    "Jessica Jones",
    "Queen of the South",
    "CastleVania",
    "John Wick",
    "Bridgerton",
    "Justice League (Snyder Cut)",
    "Prodigal Son",
    "The Falcon and the Winter Soldier",
    "The Unbreakable Kimmy Schmidt",
    "Deadpool",
    "You",
    "Punisher",
    "The Witcher",
    "Project Power",
    "Sherlock",
    "Lucifer",
    "Daredevil",
    "Pirates of the Caribbean",
    "Schitts Creek"
];

MovieTV.addEventListener('click', function(){
    var randomenter = enter[Math.floor(Math.random() * enter.length)]
    result.innerHTML = randomenter;
})