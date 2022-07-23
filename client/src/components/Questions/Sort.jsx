// Have answers into array more easily accesible
function Sort(data) {
  let questionAnswers = {};
  data.map((question) => {
    let answers = Object.keys(question.answers);
    let individual = [];
    answers.map((id) => {
        individual.push(question.answers[id])
    })
    individual.sort((a, b) => {
      if (a.helpfulness > b.helpfulness) {
        return -1;
      } else if (a.helpfulness < b.helpfulness) {
        return 1
      }
      return 0;
    })
    let tempSorting = [];
    for (var i = 0; i < individual.length; i++) {
      if (individual[i].answerer_name === "Seller") {
        tempSorting = tempSorting.concat(individual.splice(i, 1));
      }
      if (i === individual.length - 1) {
        tempSorting = tempSorting.concat(individual);
      }
    }
    questionAnswers[question.question_id] = tempSorting;
  })
  return questionAnswers;
}


export default Sort;