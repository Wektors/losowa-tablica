// export default
class Container {
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

const numbers = new Container(
	{title: "first"},
	{title: "second"},
	{title: "third"},
	{title: "fourth"},
	{title: "fifth"},
	{title: "sixth"}
);

console.log(numbers.elements);

numbers.shuffle();

console.log(numbers.elements);
