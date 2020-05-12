// var markH = 4;
// var johnH = 5;
// var markW = 40;
// var johnW = 45;
// var markBMI = markW / (markH * markH);
// var johnBMI = johnW / (johnH * johnH);
// var win = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's ? " + win);

// Coding Challenge 2

var johnG1,
  johnG2,
  johnG3,
  markG1,
  markG2,
  markG3,
  johnAvg,
  markAvg,
  maryG1,
  maryG2,
  maryG3,
  maryAvg;

johnG1 = 89;
johnG2 = 120;
johnG3 = 103;

markG1 = 116;
markG2 = 94;
markG3 = 123;

maryG1 = 97;
maryG2 = 134;
maryG3 = 105;

johnAvg = (johnG1 + johnG2 + johnG3) / 3;
markAvg = (markG1 + markG2 + markG3) / 3;
maryAvg = (maryG1 + maryG2 + maryG3) / 3;

if (johnAvg > markAvg && johnAvg > maryAvg) {
  console.log(
    "John's team wins, as it has the highest average score of " + johnAvg + "."
  );
} else if (markAvg > johnAvg && markAvg > maryAvg) {
  console.log(
    "Mark's team wins, as it has the highest average score of " + markAvg + "."
  );
} else if (maryAvg > johnAvg && maryAvg > markAvg) {
  console.log(
    "Mary's team wins, as it has the highest average score of " + maryAvg + "."
  );
} else {
  console.log("Match is been draw, as all teams have same average score.");
}
