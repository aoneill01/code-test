const equal = require("deep-equal");

/*
Input: array of objects with the following properties: system, name, episode, and season.

Return an object with the preferred values for name and episode.

For name, the preferred system order is 'b', 'c', 'a'.
For episode, the preferred system order is 'a', 'd'.
*/
function generateTitle(titles) {

}

const mapped1 = generateTitle(titles1);
console.assert(
  equal(mapped1, { name: "Example 3", episode: 1 }),
  "Did not map titles1 correctly",
  mapped1
);

const mapped2 = generateTitle(titles2);
console.assert(
  equal(mapped2, { name: null, episode: 4 }),
  "Did not map titles2 correctly",
  mapped2
);
