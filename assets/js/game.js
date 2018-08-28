//main array for hero's linked to default object info
var chararray = [goku, vegeta, monaka, piccolo, trunks];
//populates var for player with data based on chararray
var player = "";
//populates var for enemy selected with data based on chararray
var fighterarray = [];
//stat tracker for player
var playerhp = "";
var playerap = "";
//stat tracker for enemy
var enemyhp = "";
var enemyap = "";

//create object variables to contain each characters default HP/AP
var goku = {
    name: 'Goku',
    health: 500,
    attack: 25,
    counter: 25,
    src: 'assets/images/goku/gokuavatar.png'
};
var vegeta = {
    name: 'Vegeta',
    health: 475,
    attack: 30,
    counter: 30,
};
var monaka = {
    name: 'Monaka',
    health: 100,
    attack: 10,
    counter: 10,
};
var piccolo = {
    name: 'Piccolo',
    health: 425,
    attack: 15,
    counter: 15,
};
var trunks = {
    name: 'Trunks',
    health: 450,
    attack: 20,
    counter: 20,
};

//main function that houses game mechanics - lots of swapping elements/divs and importing data from arrays
$(document).ready(function() {
    $('#text').hide();
    $(document).on('click', function() {
        $('#start').hide();
    });
    //need to get onclick event for player selection
    $('#char').on('click', function(){
        $('#char').hide();
        $('#playerName')(chararray.name);
    })
    //after player selected choose fighter switches to choose enemy
    //after player selected need to populate that image into the player column
    //need to push player into player player var
    //after enemy selected need to populate the remaining heroes inoto enemy column
    //need to push enemies into fighterarray
    //after all is set need to generate text box in place of character position for later use
    //replace choose enemy with fight image and add on click event to start battle
    
});
