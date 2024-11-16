function getAverage(scores) {
  let sum = 0; //zmienna sum będzie przechowywać łączną sumę wyników 

  for (const score of scores) { 
    sum += score; //przechodzi przez kazdy element tablicy scores i dodaje go do sumy
  }

  return sum / scores.length; //srednia
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
     return "A";
  } else if (score >=80) {
    return "B";
  } else if (score >=70) {
    return "C";
  } else if (score >=60) {
    return "D";
  } else if (score < 60) {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  if (grade !== "F") {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
  } else {
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
  }
}
