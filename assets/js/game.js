//main array for hero's linked to default object info
var chararray = [goku, vegeta, buu, piccolo, trunks];
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
    attack: 15,
    counter: 40,
    audio: $('#gokudefeat'),
};
var vegeta = {
    name: 'Vegeta',
    health: 300,
    attack: 15,
    counter: 40,
    audio: $('#vegetadefeat'),
};
var buu = {
    name: 'Buu',
    health: 320,
    attack: 10,
    counter: 45,
    audio: $('#buudefeat'),
};
var piccolo = {
    name: 'Piccolo',
    health: 340,
    attack: 10,
    counter: 30,
    audio: $('#piccolodefeat'),
};
var trunks = {
    name: 'Trunks',
    health: 350,
    attack: 10,
    counter: 35,
    audio: $('#trunksdefeat'),
};




// FUNCTIONS

function createPlayer(player){
    $('#playerName').text(player.name);
    $('#playerHP').text(player.health);
    $('#playerAP').text(player.attack);
    $('#playerImg').attr('src', `assets/images/${player.name.toLowerCase()}/${player.name.toLowerCase()}avatar.png`);
    // "assets/images/" + player.name.toLowerCase() +"/"+player.name.toLowerCase()+ "avatar.png"
    $('#arenaFighter').attr('src', `assets/images/${player.name.toLowerCase()}/left/${player.name.toLowerCase()}.png`);
    //"assets/images/goku/left/goku.png"
    $('.'+player.name.toLowerCase()).replaceWith('<div id="emptyDiv" class="col">' + `<h5 class="text-center">${player.name}</h5>` + `<img src='assets/images/${player.name.toLowerCase()}/${player.name.toLowerCase()}avatar.png' class="img-fluid img-thumbnail bg-dark overlay">` + `<p class="text-center font-italic">${player.health} HP</p>` + '</div>');
    //$('.goku').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Goku</h5>' + '<img src="assets/images/goku/gokuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">325 HP</p>' + '</div>');
    $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
    //$('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
    $('#'+player.name.toLowerCase()+'taunt')[0].play();
    //$('#gokutaunt')[0].play(); 
}

function createEnemy(enemy){
    $('#enemyName').text(enemy.name);
    $('#enemyHP').text(enemy.health);
    $('#enemyAP').text(enemy.counter);
    $('#enemyImg').attr('src', `assets/images/${enemy.name.toLowerCase()}/${enemy.name.toLowerCase()}avatar.png`);
    $('#arenaOpponent').attr('src', `assets/images/${enemy.name.toLowerCase()}/right/${enemy.name.toLowerCase()}.png`);
    $('.'+enemy.name.toLowerCase()).replaceWith('<div id="emptyDiv" class="col">' + `<h5 class="text-center">${enemy.name}</h5>` + `<img src='assets/images/${enemy.name.toLowerCase()}/${enemy.name.toLowerCase()}avatar.png' class="img-fluid img-thumbnail bg-dark overlay">` + `<p class="text-center font-italic">${enemy.health} HP</p>` + '</div>');
    //$('.goku').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Goku</h5>' + '<img src="assets/images/goku/gokuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">325 HP</p>' + '</div>');
    $('#prompt').attr('src', '');
    //$('#prompt').attr('src', '');
    $('#begin').attr('src', 'assets/images/notify/fight.png');
    //$('#begin').attr('src', 'assets/images/notify/fight.png');
    $('#result').attr('src', '');
    //$('#result').attr('src', '');
    $('#'+enemy.name.toLowerCase()+'taunt')[0].play();
    //$('#gokutaunt')[0].play();
}

//need to get onclick event for player selection

//main function that houses game mechanics - lots of swapping elements/divs and importing data from arrays
$(document).ready(function() {
    $('#text').hide();
    $('.goku, .vegeta, .buu, .piccolo, .trunks').hide();
    $('#start').on('click', function(){
        $('#interact')[0].play();
    })
    $(document).click(function() {
        $('#start').hide();
    });
    $('#charSelect').click(function(){
        $('.goku, .vegeta, .buu, .piccolo, .trunks').show();
        $('#goku, #vegeta, #buu, #piccolo, #trunks').hide();
    });

});  

$(function battle() {
        $('#goku').on('click', function(){
            player = goku;
            createPlayer(player);
        });
        $('#vegeta').on('click', function(){
            player = vegeta;
            createPlayer(player);
        })
        $('#buu').on('click', function(){
            player = buu;
            createPlayer(player);
        });
        $('#piccolo').on('click', function(){
            player = piccolo;
            createPlayer(player);
        });
        $('#trunks').on('click', function(){
            player = trunks;
            createPlayer(player);
        });

        $('.goku').on('click', function(){
            enemy = goku;
            createEnemy(enemy);
        });
        $('.vegeta').on('click', function(){
            enemy = vegeta;
            createEnemy(enemy);
        })
        $('.buu').on('click', function(){
            enemy = buu
            createEnemy(enemy);
        });
        $('.piccolo').on('click', function(){
            enemy = piccolo;
            createEnemy(enemy);
        });
        $('.trunks').on('click', function(){
            enemy = trunks;
            createEnemy(enemy);
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
        $('#fight')[0].play();
        
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
            $(enemy.audio)[0].play();

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


