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
    name: 'Super Buu',
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
    
}

function createEnemy(enemy){
    $('#enemyName').text(enemy.name);
    $('#enemyHP').text(enemy.health);
    $('#enemyAP').text(enemy.counter);
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
            $('.goku').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Goku</h5>' + '<img src="assets/images/goku/gokuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">325 HP</p>' + '</div>');
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
            $('#gokutaunt')[0].play();

        });
        $('#vegeta').on('click', function(){
            player = vegeta;
            $('#playerImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaFighter').attr('src', "assets/images/vegeta/left/vegeta.png");
            createPlayer(player);
            $('.vegeta').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Vegeta</h5>' + '<img src="assets/images/vegeta/vegetaavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">350 HP</p>' + '</div>');
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
            $('#vegetataunt')[0].play();
        })
        $('#buu').on('click', function(){
            player = buu;
            $('#playerImg').attr('src', "assets/images/buu/buuavatar.png");
            $('#arenaFighter').attr('src', "assets/images/buu/left/buu.png");
            createPlayer(player);
            $('.buu').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">buu</h5>' + '<img src="assets/images/buu/buuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">150 HP</p>' + '</div>');
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
            $('#buutaunt')[0].play();
        });
        $('#piccolo').on('click', function(){
            player = piccolo;
            $('#playerImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaFighter').attr('src', "assets/images/piccolo/left/piccolo.png");
            createPlayer(player);
            $('.piccolo').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Piccolo</h5>' + '<img src="assets/images/piccolo/piccoloavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">375 HP</p>' + '</div>');
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
            $('#piccolotaunt')[0].play();
        });
        $('#trunks').on('click', function(){
            player = trunks;
            $('#playerImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaFighter').attr('src', "assets/images/trunks/left/trunks.png");
            createPlayer(player);
            $('.trunks').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Trunks</h5>' + '<img src="assets/images/trunks/trunksavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">350 HP</p>' + '</div>');
            $('#prompt').attr('src', 'assets/images/notify/chooseopponent.png');
            $('#trunkstaunt')[0].play();
        });

        $('.goku').on('click', function(){
            enemy = goku;
            $('#enemyImg').attr('src', "assets/images/goku/gokuavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/goku/right/goku.png");
            createEnemy(enemy);
            $('.goku').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Goku</h5>' + '<img src="assets/images/goku/gokuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">325 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
            $('#gokutaunt')[0].play();

        });
        $('.vegeta').on('click', function(){
            enemy = vegeta;
            $('#enemyImg').attr('src', "assets/images/vegeta/vegetaavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/vegeta/right/vegeta.png");
            createEnemy(enemy);
            $('.vegeta').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Vegeta</h5>' + '<img src="assets/images/vegeta/vegetaavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">350 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
            $('#vegetataunt')[0].play();
        })
        $('.buu').on('click', function(){
            
            
            enemy = buu
            console.log("buu health: ", enemy.health)
            if(enemy.health >0){
                $('.vegeta').off('click')
            }
            $('#enemyImg').attr('src', "assets/images/buu/buuavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/buu/right/buu.png");
            createEnemy(enemy);
            $('.buu').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">buu</h5>' + '<img src="assets/images/buu/buuavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">150 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
            $('#buutaunt')[0].play();
        });
        $('.piccolo').on('click', function(){
            enemy = piccolo;
            $('#enemyImg').attr('src', "assets/images/piccolo/piccoloavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/piccolo/right/piccolo.png");
            createEnemy(enemy);
            $('.piccolo').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Piccolo</h5>' + '<img src="assets/images/piccolo/piccoloavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">375 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
            $('#piccolotaunt')[0].play();
        });
        $('.trunks').on('click', function(){
            enemy = trunks;
            $('#enemyImg').attr('src', "assets/images/trunks/trunksavatar.png");
            $('#arenaOpponent').attr('src', "assets/images/trunks/right/trunks.png");
            createEnemy(enemy);
            $('.trunks').replaceWith('<div id="emptyDiv" class="col">' + '<h5 class="text-center">Trunks</h5>' + '<img src="assets/images/trunks/trunksavatar.png" class="img-fluid img-thumbnail bg-dark overlay">' + '<p class="text-center font-italic">350 HP</p>' + '</div>');
            $('#prompt').attr('src', '');
            $('#begin').attr('src', 'assets/images/notify/fight.png');
            $('#result').attr('src', '');
            $('#trunkstaunt')[0].play();
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
            $('.vegeta').on('click');

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


