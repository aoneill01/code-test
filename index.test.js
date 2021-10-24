/*
Input: array of objects with the following properties: system, name, episode, and season.

If there is a system of 'b', return its name value.
Otherwise, if there is a system of 'c', return its name value.
Otherwise, if there is a system of 'a', return its name value.
Otherwise, return null.
*/
function getName(titles) {

}

// Example:

const titles1 = [
  {
    system: 'a',
    name: 'Example 1',
    episode: 1,
    season: 2,
  },
  {
    system: 'd',
    name: 'Example 2',
    episode: 3,
    season: 1,
  },
  {
    system: 'c',
    name: 'Example 3',
    episode: 2,
    season: 2,
  },
];

const titles2 = [
  {
    system: 'd',
    name: 'Example 1',
    episode: 4,
    season: 3,
  },
];

test('finds name for system c', () => {
  expect(getName(titles1)).toBe('Example 3');
});
test('falls back to null when no system found', () => {
  expect(getName(titles2)).toBe(null);
});
