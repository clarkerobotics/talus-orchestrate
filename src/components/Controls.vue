<template>
<div class="controls">
	<h2>Manual Joint Jog</h2>

	<div class="axis-controls">
    <div v-for="item in axis">
      <label>{{item.name}}</label>
      <input type="range" :min="item.min" :max="item.max" v-model="item.active" @input="rotateAxis(item, item.label)">
    </div>
		<!-- <div class="axis-reset">
			<button class="btn-reset">Enable</button>
		</div> -->
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
			this.$socket.emit('WS:CLIENT', {
		    id,
				value,
		    key: 'joint'
		  })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/range_input.scss";

.controls {
  background: rgba(0,0,0,.25);
	border-right: 1px solid rgba(0,0,0,0.1);
  margin: 0;
  padding: 0;
  position: fixed;
  height: calc(100vh - 80px);
  width: 25%;

	h2 {
		font: 300 23pt/24pt Avenir, Helvetica, sans-serif;
		color: #2b2c3a;
		text-align: center;
	}
}

.axis-controls {
	padding: 20px;
}
</style>
