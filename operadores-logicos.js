const finalGrade = 6;
const fouls = 2;
const warning = 0;

if (finalGrade < 7 && fouls > 4) {
    console.log('Reprovado, estude mais');
} else {
    console.log('Não foi reprovado')
}

if(fouls <= 2 && !warning) {
    console.log('Recebeu bonus');
} else {
    console.log('Não recebeu bonus')   
}