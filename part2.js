/*
Input: array of objects with the following properties: system, name, episode, and season.

Return an object with the preferred values for name and episode.

For name, the preferred system order is 'b', 'c', 'a'.
For episode, the preferred system order is 'a', 'd'.
*/
function generateTitle(titles) {

}

test('maps titles1 correctly', () => {
  expect(generateTitle(titles1)).toEqual({ name: 'Example 3', episode: 1 });
});
test('maps titles2 correctly', () => {
  expect(generateTitle(titles2)).toEqual({ name: null, episode: 4 });
});
