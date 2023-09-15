<template>
	<div>
		<button v-on:click="handleClickShuffle()">Shuffle</button>

		<!-- testowe wyświetlanie  -->

		<div v-for="element in numbers_to_display.elements" :key="element">
			{{ element.title }}
		</div>

		<!-- tutaj komponent nie wiem jak zrobic aby działał -->
		<Element_component
			v-for="number in numbers_to_display.elements"
			:key="number.id" 
			:title="number.title"
		/>
	</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Element_component from "/src/components/Element_component.vue";
import { numbers } from "/src/js/Container.js";
// Define the component in class-style
@Component({
	components: {
		Element_component,
	},
})
export default class Container_component extends Vue {
	// Class properties will be component data
	data() {
		return {
			numbers_to_display: numbers,
		};
	}
	// Methods will be component methods
	handleClickShuffle() {
		numbers.shuffle();
	}
}

console.log("!!");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
