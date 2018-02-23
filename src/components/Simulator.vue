<template>
<section class="simulator">
  <div id="simulator-wrap"></div>
</section>
</template>

<script>
// Load libraries
const THREE = require('three')
const STLLoader = require('three-stl-loader')(THREE)
const loader = new STLLoader()
import stls from '../utils/stlFiles'
import { SceneHelper } from '../utils/scene'

export default {
  name: 'Simulator',
  data() {
    return {
      scene: undefined,
    }
  },

  methods: {
    init() {
      {
        // Store the sections for laterz
        const groups = {}
        let sectionGroups

        // Load all stl files
        stls.forEach(function(section) {
          var sectionGroup = new THREE.Object3D()
          sectionGroup.translateX(section.translate[0])
          sectionGroup.translateY(section.translate[1])
          sectionGroup.translateZ(section.translate[2])
          groups[section.section] = sectionGroup

          // load all section pieces
          section.pieces.forEach((piece) => {
            loader.load(`./static/stl/${piece.file}`, function (geometry) {
              geometry.rotateX(section.rotation[0])
              geometry.rotateY(section.rotation[1])
              geometry.rotateZ(section.rotation[2])

              var mat = new THREE.MeshLambertMaterial({ color: `#${piece.color}` })
              var item = new THREE.Mesh(geometry, mat)
              item.castShadow = true
              sectionGroup.add(item)
            })
          })
        })

        // Nested so the constraints match
        groups.e.add(groups.f)
        groups.d.add(groups.e)
        groups.c.add(groups.d)
        groups.b.add(groups.c)
        groups.a.add(groups.b)
        groups['0'].add(groups.a)
        sectionGroups = groups['0']
        sectionGroups.scale.set(0.4, 0.4, 0.4)

        this.scene.add(sectionGroups);
        this.scene.groups = groups

        // Begin render queue
        this.scene.render()
      }
    }
  },

  mounted() {
    this.scene = new SceneHelper({
      THREE: THREE,
      element: 'simulator-wrap'
    })

    this.init()
  },
}
</script>

<style scoped>
.simulator,
#simulator-wrap {
  height: 100vh;
  width: 100vw;
  /* min-height: 100vh; */
}
</style>
