<template>
<div class="controls">
	<h2>Manual Joint Jog</h2>

	<div class="axis-controls">
    <div v-for="item in axis">
      <label>{{item.name}}</label>
      <input type="range" :min="item.min" :max="item.max" v-model="item.active" @input="rotateAxis(item, item.label)">
    </div>
		<!-- <div class="axis-reset">
			<button class="btn-reset">Reset All</button>
		</div> -->
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

const axis = [{
  name: 'Section A',
  label: 'a',
  min: '-50',
  max: '50',
}, {
  name: 'Section B',
  label: 'b',
  min: '-28',
  max: '28',
}, {
  name: 'Section C',
  label: 'c',
  min: '-50',
  max: '50',
}, {
  name: 'Section D',
  label: 'd',
  min: '-25',
  max: '25',
}, {
  name: 'Section E',
  label: 'e',
  min: '0',
  max: '100',
}, {
  name: 'Section F',
  label: 'f',
  min: '-50',
  max: '50',
}]

export default {
  name: 'Controls',

  data() {
    return {
      axis,
    }
  },

  methods: {
		...mapActions(['updateJoint']),
    rotateAxis(axis, id) {
    	const rads = (Math.PI * 2) * (parseInt(axis.active, 10) / 100)
			let rotation = 'y'
			let value = rads
    	switch (id) {
    		case 'b':
    			rotation = 'z'
    			break;
    		case 'c':
    			value = rads / 1.4
					rotation = 'z'
    			break;
    		case 'e':
    			value = (rads - Math.PI) / 1.4
					rotation = 'z'
    			break;
    		default:
    			// nuthin bruh
    	}

			this.updateJoint({ id, value })
	    this.$event.$emit('UPDATE:JOINT', { id, value })
    },
  },
}
</script>

<style scoped>
@import "../scss/range_input.scss";

.controls {
  background: rgba(0,0,0,.25);
	border-right: 1px solid rgba(0,0,0,0.1);
  margin: 0;
  padding: 0;
  position: fixed;
  height: calc(100vh - 80px);
  width: 25%;
}
.controls h2 {
	font: 300 23pt/24pt Avenir, Helvetica, sans-serif;
	color: #2b2c3a;
	text-align: center;
}

input[type=range] {
  -webkit-appearance: none;
  border: 1px solid #2b2c3a;
  border-radius: 20px;
  overflow: hidden;
  outline: none;
  width: 100%;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  /* height: 16px; */
  background: rgba(255,255,255,0.2);
  border: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 30px;
  width: 50px;
  border-radius: 15px;
  background: #2b2c3a;
	margin: 1px;
}

input[type=range]:focus {
  outline: none;
}

.axis-controls {
	padding: 20px;
}
</style>
