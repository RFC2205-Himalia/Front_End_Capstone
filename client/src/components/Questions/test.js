import Sort from "./Sort.jsx";



// Nicks Tests

describe('Sort Data function', () => {
  test("Should return sorted list based on helpfulness rating and if answer is from the Seller", () => {
    const input = [
      { question_id: 583171,
        question_body: 'Can I wash it?',
        question_date: '2017-01-04T00:00:00.000Z',
        asker_name: 'luaulover',
        question_helpfulness: 2,
        reported: false,
        answers: {
          '5448469': {
            id: 5448469,
            body: 'It says not to',
            date: '2017-01-04T00:00:00.000Z',
            answerer_name: 'skilover',
            helpfulness: 5,
            photos: []
          },
          '5448501': {
            id: 5448501,
            body: 'I wouldn\'t machine wash it',
            date: '2017-11-04T00:00:00.000Z',
            answerer_name: 'skilover',
            helpfulness: 12,
            photos: []
          },
          '5448513': {
            id: 5448513,
            body: 'Only if you want to ruin it!',
            date: '2017-11-04T00:00:00.000Z',
            answerer_name: 'skilover',
            helpfulness: 15,
            photos: []
          },
          '5448515': {
            id: 5448515,
            body: 'Only if you want to ruin it!',
            date: '2017-11-04T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 1,
            photos: []
          }
        }
      }
  ];

    const expectedResults = {'583171': [
      {
        id: 5448515,
        body: 'Only if you want to ruin it!',
        date: '2017-11-04T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 1,
        photos: []
      },
      {
        id: 5448513,
        body: 'Only if you want to ruin it!',
        date: '2017-11-04T00:00:00.000Z',
        answerer_name: 'skilover',
        helpfulness: 15,
        photos: []
      },
      {
        id: 5448501,
        body: 'I wouldn\'t machine wash it',
        date: '2017-11-04T00:00:00.000Z',
        answerer_name: 'skilover',
        helpfulness: 12,
        photos: []
      },
      {
        id: 5448469,
        body: 'It says not to',
        date: '2017-01-04T00:00:00.000Z',
        answerer_name: 'skilover',
        helpfulness: 5,
        photos: []
      }
    ]}
    const test = new Promise(() => {
      Sort(input)
    });
    test
      .then(() => {expect(test).toEqual(expectedResults)});
  });
});