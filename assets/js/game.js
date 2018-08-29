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
//need to get onclick event for player selection

//main function that houses game mechanics - lots of swapping elements/divs and importing data from arrays
$(document).ready(function() {
    $('#text').hide();
    $('.goku, .vegeta, .monaka, .piccolo, .trunks').hide();
    $(document).click(function() {
        $('#start').hide();
    });
    $('#charSelect').click(function(){
        $('.goku, .vegeta, .monaka, .piccolo, .trunks').show();
        $('#goku, #vegeta, #monaka, #piccolo, #trunks').hide();
    });

});  

$(function battle() {
        $('#goku').on('click', function(){
            $('#playerImg').attr('src', "assets/images/goku/gokuavatar.png");
            $('#arenaFighter').attr('src', "assets/images/goku/left/goku.png");
            $('#playerName').text(goku.name);
            $('#playerHP').text(goku.health);
            $('#playerAP').text(goku.attack);
            $('.goku').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#vegeta').on('click', function(){
            $('#playerImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaFighter').attr('src', "assets/images/vegeta/left/vegeta.png");
            $('#playerName').text(vegeta.name);
            $('#playerHP').text(vegeta.health);
            $('#playerAP').text(vegeta.attack);
            $('.vegeta').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        })
        $('#monaka').on('click', function(){
            $('#playerImg').attr('src', "assets/images/monaka/monakaavatar.png");
            $('#arenaFighter').attr('src', "assets/images/monaka/left/monaka.png");
            $('#playerName').text(monaka.name);
            $('#playerHP').text(monaka.health);
            $('#playerAP').text(monaka.attack);
            $('.monaka').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#piccolo').on('click', function(){
            $('#playerImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaFighter').attr('src', "assets/images/piccolo/left/piccolo.png");
            $('#playerName').text(piccolo.name);
            $('#playerHP').text(piccolo.health);
            $('#playerAP').text(piccolo.attack);
            $('.piccolo').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#trunks').on('click', function(){
            $('#playerImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaFighter').attr('src', "assets/images/trunks/left/trunks.png");
            $('#playerName').text(trunks.name);
            $('#playerHP').text(trunks.health);
            $('#playerAP').text(trunks.attack);
            $('.trunks').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });

        $('.goku').on('click', function(){
            $('#enemyImg').attr('src', "assets/images/goku/gokuavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/goku/right/goku.png");
            $('#enemyName').text(goku.name);
            $('#enemyHP').text(goku.health);
            $('#enemyAP').text(goku.attack);
            $('.goku').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#text').show();

        });
        $('.vegeta').on('click', function(){
            $('#enemyImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/vegeta/right/vegeta.png");
            $('#enemyName').text(vegeta.name);
            $('#enemyHP').text(vegeta.health);
            $('#enemyAP').text(vegeta.attack);
            $('.vegeta').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#text').show();
        })
        $('.monaka').on('click', function(){
            $('#enemyImg').attr('src', "assets/images/monaka/monakaavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/monaka/right/monaka.png");
            $('#enemyName').text(monaka.name);
            $('#enemyHP').text(monaka.health);
            $('#enemyAP').text(monaka.attack);
            $('.monaka').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#text').show();
        });
        $('.piccolo').on('click', function(){
            $('#enemyImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/piccolo/right/piccolo.png");
            $('#enemyName').text(piccolo.name);
            $('#enemyHP').text(piccolo.health);
            $('#enemyAP').text(piccolo.attack);
            $('.piccolo').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#text').show();
        });
        $('.trunks').on('click', function(){
            $('#enemyImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/trunks/right/trunks.png");
            $('#enemyName').text(trunks.name);
            $('#enemyHP').text(trunks.health);
            $('#enemyAP').text(trunks.attack);
            $('.trunks').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#text').show();
        });
    //replace choose enemy with fight image and add on click event to start battle
$(function battleSim() {
    //on click event for fight begin game mechanics editing data and populating it onto text screen. will also show/hide
})
});


