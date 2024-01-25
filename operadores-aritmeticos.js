const noteFirstBi = 8;
const notesecondBi = 6.3;
const noteThirdBi = 7;
const noteFourthdBi = 9.3;

let average = (noteFirstBi + notesecondBi + noteThirdBi + noteFourthdBi) / 4;

if (average >= 7) {
    average += average * 0.1;
}

console.log(`a média é ${average.toFixed(2)}`)