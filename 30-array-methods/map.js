/**
 * ARRAY METHODS
 *
 * sort()
 * find()
 * filter()
 * map() <--
 * reduce()
 */

const friends = [
	{ name: 'John', grade: 2, year: 3, sex: 'M' },
	{ name: 'Sarah', grade: 3, year: 2, sex: 'F' },
	{ name: 'Bob', grade: 3, year: 5, sex: 'M' },
	// { grade: 1, year: 42, sex: 'Alien' },
	{ name: 'Johnny', grade: 2, year: 2, sex: 'M' },
	{ name: 'Ethan', grade: 4, year: 1, sex: 'M' },
	{ name: 'Paula', grade: 4, year: 5, sex: 'F' },
	{ name: 'Donald', grade: 5, year: 5, sex: 'M' },
	{ name: 'Jennifer', grade: 3, year: 3, sex: 'F' },
	{ name: 'Courtney', grade: 3, year: 1, sex: 'F' },
	{ name: 'Jane', grade: 4, year: 3, sex: 'F '}
];

/*
const names = [];
friends.forEach(friend => {
	names.push(friend.name);
});
*/
const names = friends.map(friend => {
	return friend.name;
});

console.log(names);


const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Peter",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];
