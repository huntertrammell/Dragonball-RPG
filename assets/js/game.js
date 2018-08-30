//main array for hero's linked to default object info
var chararray = [goku, vegeta, monaka, piccolo, trunks];
//populates var for player with data based on chararray
var player = "";
//populates var for enemy selected with data based on chararray
var enemy = "";
//stat tracker for player

defeat = 0;

//create object variables to contain each characters default HP/AP
var goku = {
    name: 'Goku',
    health: 325,
    attack: 40,
    counter: 70,
};
var vegeta = {
    name: 'Vegeta',
    health: 350,
    attack: 30,
    counter: 60,
};
var monaka = {
    name: 'Monaka',
    health: 150,
    attack: 10,
    counter: 20,
};
var piccolo = {
    name: 'Piccolo',
    health: 375,
    attack: 20,
    counter: 40,
};
var trunks = {
    name: 'Trunks',
    health: 350,
    attack: 25,
    counter: 60,
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
            player = goku;
            $('#playerImg').attr('src', "assets/images/goku/gokuavatar.png");
            $('#arenaFighter').attr('src', "assets/images/goku/left/goku.png");
            $('#playerName').text(goku.name);
            $('#playerHP').text(goku.health);
            $('#playerAP').text(goku.attack);
            $('.goku').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#vegeta').on('click', function(){
            player = vegeta;
            $('#playerImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaFighter').attr('src', "assets/images/vegeta/left/vegeta.png");
            $('#playerName').text(vegeta.name);
            $('#playerHP').text(vegeta.health);
            $('#playerAP').text(vegeta.attack);
            $('.vegeta').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        })
        $('#monaka').on('click', function(){
            player = monaka;
            $('#playerImg').attr('src', "assets/images/monaka/monakaavatar.png");
            $('#arenaFighter').attr('src', "assets/images/monaka/left/monaka.png");
            $('#playerName').text(monaka.name);
            $('#playerHP').text(monaka.health);
            $('#playerAP').text(monaka.attack);
            $('.monaka').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#piccolo').on('click', function(){
            player = piccolo;
            $('#playerImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaFighter').attr('src', "assets/images/piccolo/left/piccolo.png");
            $('#playerName').text(piccolo.name);
            $('#playerHP').text(piccolo.health);
            $('#playerAP').text(piccolo.attack);
            $('.piccolo').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });
        $('#trunks').on('click', function(){
            player = trunks;
            $('#playerImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaFighter').attr('src', "assets/images/trunks/left/trunks.png");
            $('#playerName').text(trunks.name);
            $('#playerHP').text(trunks.health);
            $('#playerAP').text(trunks.attack);
            $('.trunks').remove();
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
        });

        $('.goku').on('click', function(){
            enemy = goku;
            $('#enemyImg').attr('src', "assets/images/goku/gokuavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/goku/right/goku.png");
            $('#enemyName').text(goku.name);
            $('#enemyHP').text(goku.health);
            $('#enemyAP').text(goku.counter);
            $('.goku').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');

        });
        $('.vegeta').on('click', function(){
            enemy = vegeta;
            $('#enemyImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/vegeta/right/vegeta.png");
            $('#enemyName').text(vegeta.name);
            $('#enemyHP').text(vegeta.health);
            $('#enemyAP').text(vegeta.counter);
            $('.vegeta').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
        })
        $('.monaka').on('click', function(){
            enemy = monaka
            $('#enemyImg').attr('src', "assets/images/monaka/monakaavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/monaka/right/monaka.png");
            $('#enemyName').text(monaka.name);
            $('#enemyHP').text(monaka.health);
            $('#enemyAP').text(monaka.counter);
            $('.monaka').replaceWith('<div id=emptyDiv class="col">');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
        });
        $('.piccolo').on('click', function(){
            enemy = piccolo;
            $('#enemyImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/piccolo/right/piccolo.png");
            $('#enemyName').text(piccolo.name);
            $('#enemyHP').text(piccolo.health);
            $('#enemyAP').text(piccolo.counter);
            $('.piccolo').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Piccolo</h5>' + '<img src="assets/images/piccolo/piccoloavatar.png" class="img-fluid img-thumbnail bg-dark">' + '<p class="text-center font-italic">375 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
        });
        $('.trunks').on('click', function(){
            enemy = trunks;
            $('#enemyImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/trunks/right/trunks.png");
            $('#enemyName').text(trunks.name);
            $('#enemyHP').text(trunks.health);
            $('#enemyAP').text(trunks.counter);
            $('.trunks').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Trunks</h5>' + '<img src="assets/images/trunks/trunksavatar.png" class="img-fluid img-thumbnail bg-dark">' + '<p class="text-center font-italic">350 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
        });

$(function battleSim() {
    //on click event for fight begin game mechanics editing data and populating it onto text screen. will also show/hide

    $('#begin').click(function(){
        $('#text').show();
        $('#playerStat').text(player.name + ' attacks! ' + enemy.name + ' is hit with an attack of ' + player.attack + ' bringing his health down to ' + ((parseInt(enemy.health))-(parseInt(player.attack))) + '!');
        enemy.health = ((parseInt(enemy.health))-(parseInt(player.attack)));
        $('#enemyHP').text(enemy.health);
        $('#enemyStat').text(enemy.name + ' counter attacks! ' + player.name + ' is hit with an attack of ' + enemy.counter + ' bringing his health down to ' + ((parseInt(player.health))-(parseInt(enemy.counter))) + '!');
        player.health = ((parseInt(player.health))-(parseInt(enemy.counter)));
        $('#playerHP').text(player.health);
        player.attack = ((parseInt(player.attack) * 2));
        $('#playerAP').text(player.attack);
        $('#attackBonus').text(player.name + ' is geting stronger with every move! ' + player.name + ' is now twice as strong!');
        
        if ((parseInt(player.health)) <= 0) {
            $('#playerStat').text('');
            $('#enemyStat').text(player.name + ' has been defeated! Would you like to try again?');
            $('#attackBonus').text('');
            $('#begin').attr('src', '');
            $('#result').attr('src', 'assets/images/notify/defeat.png');
            $('#reset').attr('src', 'assets/images/notify/restart.png');

        } else if ((parseInt(enemy.health)) <= 0) {
            $('#result').attr('src', 'assets/images/notify/victory.png');
            $('#begin').attr('src', '');
            $('#playerStat').text('');
            $('#enemyStat').text(enemy.name + ' has been defeated! Choose another fighter!');
            $('#attackBonus').text('');
            defeat++;

            if (defeat == 4) {
                $('#begin').attr('src', '');
                $('#reset').attr('src', 'assets/images/notify/restart.png');
                $('#playerStat').text(enemy.name + ' has been defeated!');
                $('#enemyStat').text('');
                $('#attackBonus').text('The new champion of the universe is ' + player.name + '!!!!');
            };
        };
    }); 
       
});

$(function reset(){
    $('#reset').on('click', function(){
        document.location.reload();
    });
});

});


