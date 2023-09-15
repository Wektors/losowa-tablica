export default class Container {
	constructor(...props) {
		this.elements = [...props];
	}

	shuffle() {
		for (let i = this.elements.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
		}
	}
}

export const numbers = new Container(
	{
		id: 1,
		title: "first",
	},
	{
		id: 2,
		title: "second",
	},
	{
		id: 3,
		title: "third",
	},
	{
		id: 4,
		title: "fourth",
	},
	{
		id: 5,
		title: "fifth",
	},
	{
		id: 6,
		title: "sixth",
	}
);

console.log(numbers.elements);

