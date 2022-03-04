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
    system: "a",
    name: "Example 1",
    episode: 1,
    season: 2,
  },
  {
    system: "d",
    name: "Example 2",
    episode: 3,
    season: 1,
  },
  {
    system: "c",
    name: "Example 3",
    episode: 2,
    season: 2,
  },
];

const titles2 = [
  {
    system: "d",
    name: "Example 1",
    episode: 4,
    season: 3,
  },
];

console.log("Starting tests...");

// For titles1, it doesn't have system 'b', but it does have system 'c', so it should return 'Example 3'.
// System 'a' is ignored.
const test1 = getName(titles1);
console.assert(
  test1 === "Example 3",
  "Test 1: expected: Example 3, received:",
  test1
);

// Reversing the order of titles1 should give the same result.
const test2 = getName([...titles1].reverse());
console.assert(
  test2 === "Example 3",
  "Test 2: expected: Example 3, received:",
  test2
);

// For titles2, it does not have any of the specified systems, so it should return null.
const test3 = getName(titles2);
console.assert(test3 === null, "Test 3: expected: null, received:", test3);

console.log("Finished tests");
