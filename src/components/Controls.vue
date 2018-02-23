<template>
<div class="controls">
	<h1>Talus Orchestrator</h1>

	<div class="axis-controls">
    <div v-for="item in axis">
      <label>{{item.name}}</label>
      <input type="range" :min="item.min" :max="item.max" value="0" @input="rotateAxis(this, item.label)">
    </div>
	</div>
</div>
</template>

<script>

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
    rotateAxis(val, id) {
      console.log('val, id', val, id)
    	// var rads = (Math.PI * 2) * (val / 100)
    	// switch (id) {
    	// 	case 'a':
    	// 		scene.groups.a.rotation.y = rads
    	// 		break;
    	// 	case 'b':
    	// 		scene.groups.b.rotation.z = rads
    	// 		break;
    	// 	case 'c':
    	// 		scene.groups.c.rotation.z = rads / 1.4
    	// 		break;
    	// 	case 'd':
    	// 		scene.groups.d.rotation.y = rads
    	// 		break;
    	// 	case 'e':
    	// 		scene.groups.e.rotation.z = (rads - Math.PI) / 1.4
    	// 		break;
    	// 	case 'f':
    	// 		scene.groups.f.rotation.y = rads
    	// 		break;
    	// 	default:
    	// 		// nuthin bruh
    	// }
    },
  },
}
</script>

<style scoped>
@import "../scss/range_input.scss";

.controls {
  background: rgba(0,0,0,.25);
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100vh;
  width: 25%;
}
</style>
