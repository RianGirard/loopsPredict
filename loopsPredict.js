for (var num = 0; num < 15; num++){
    console.log(num);
}
// predicted output is numbers in sequence from 0 through 14; confirmed! 

for (var i = 1; i < 10; i+=2){
    if(i % 3 == 0) {
        console.log(i);
    }
}
// predicted output is 3, 9; confirmed! 

for (var j = 1; j <= 15; j++){
    if (j % 2 == 0){
        j+=2;
    }
    else if (j % 3 == 0){
        j++;
    }
    console.log(j);
}
// predicted output is 1, 4, 5, 8, 10, 11, 14, 16