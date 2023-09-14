<template>
	<div>
    <div >
      {{  this.numbers }}
    </div>
	</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

// Define the component in class-style
@Component
export default class Container_component extends Vue {
	// Class properties will be component data
	
	// Methods will be component methods
	
}
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
