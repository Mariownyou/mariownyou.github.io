var turtle = '🐢';
var corn = '🌾';
var food = '🍅';
var field = [];
var m = 7, n = 7;
var score = 0;
var pos1 = random(0, m);
var pos2 = random(0, n);
var fpos1 = random(0, m);
var fpos2 = random(0, n);
var nr = Math.round(n/2);
var mr = Math.round(m/2);


function make_field(f){
    for (let i = 0; i < m; i++){
        f[i] = [];
        for (let j = 0; j < n; j++){
            f[i][j] = corn;
        }
    }
    f[fpos1][fpos2] = food;
    f[pos1][pos2] = turtle;
    return f;
}

function field_update(f){
    if (pos1 == fpos1 && pos2 == fpos2){
        make_food(f);
        score++;
    }
    $( "#field" ).empty();
    for (let i = 0; i < f.length; i++){
        row = f[i].join(' ');
        jQuery("#field").append(row+'<br>');
    }
    jQuery('#score').text(food + 'x' + score);
}

function set_pos(f){
    f[fpos1][fpos2] = food;
    f[pos1][pos2] = turtle;
}

function make_food(f){
    fpos1 = random(0, m);
    fpos2 = random(0, n);
    f[fpos1][fpos2] = food;
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//------------------------------------------
//функции движения
function left(field){
    if (pos2 == 0){
        pos2=n;
    }
    pos2--;
}

function right(field){
    if (pos2 == n-1){
        pos2=-1;
    }
    pos2++;
}

function up(field){
    if (pos1 == 0){
        pos1=m;
    }
    pos1--;
}

function down(field){
    if (pos1 == m-1){
        pos1=-1;
    }
    pos1++
}
//------------------------------------------
//функции движения
function showButtons(){
    document.getElementById("buttons").style.visibility="visible";
}


jQuery('document').ready(function(){

    jQuery('#play').on('click', function(){
        score = 0;
        turtle = jQuery('#input1').val();// обновляем черепашку
        corn = jQuery('#input2').val();// обновляем поле
        food = jQuery('#input3').val();//обновляем еду
        make_field(field); // заполняем массив
        set_pos(field); // расставляем юниты
        field_update(field); // выводим массив
        jQuery('#score').text(food + 'x' + score);
        showButtons();
    });

    $('#up').on('click', function(){
        up(field);
        make_field(field);
        field_update(field);
    });
    $('#down').on('click', function(){
        down(field);
        make_field(field);
        field_update(field);
    });
    $('#left').on('click', function(){
        left(field);
        make_field(field);
        field_update(field);
    });
    $('#right').on('click', function(){
        right(field);
        make_field(field);
        field_update(field);
    });
});
