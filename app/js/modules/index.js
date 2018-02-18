// Load libraries
const THREE = require('three')
const STLLoader = require('three-stl-loader')(THREE)
const loader = new STLLoader()
import stls from './stlFiles'
import { SceneHelper } from './scene'

function onLoad() {
  // Initialize Scene
  const scene = new SceneHelper({
    THREE: THREE,
    element: 'simulator'
  })

  // Store the sections for laterz
  const groups = {}
  var sectionGroups;

  // Load all stl files
  stls.forEach(function(section) {
    var sectionGroup = new THREE.Object3D()
    sectionGroup.translateX(section.translate[0])
    sectionGroup.translateY(section.translate[1])
    sectionGroup.translateZ(section.translate[2])
    groups[section.section] = sectionGroup

    // load all section pieces
    section.pieces.forEach((piece) => {
      loader.load(`stl/${piece.file}`, function (geometry) {
        geometry.rotateX(section.rotation[0])
        geometry.rotateY(section.rotation[1])
        geometry.rotateZ(section.rotation[2])

        var mat = new THREE.MeshLambertMaterial({ color: `#${piece.color}` })
        var item = new THREE.Mesh(geometry, mat)
        item.castShadow = true;
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

  scene.add(sectionGroups);
  scene.groups = groups

  // new rotation logics
  window.rotateAxis = (val, id) => {
    var rads = (Math.PI * 2) * (val / 100)
    switch (id) {
      case 'a':
        scene.groups.a.rotation.y = rads
        break;
      case 'b':
        scene.groups.b.rotation.z = rads
        break;
      case 'c':
        scene.groups.c.rotation.z = rads / 1.4
        break;
      case 'd':
        scene.groups.d.rotation.y = rads
        break;
      case 'e':
        scene.groups.e.rotation.z = (rads - Math.PI) / 1.4
        break;
      case 'f':
        scene.groups.f.rotation.y = rads
        break;
      default:
        // nuthin bruh
    }
  }

  // Begin render queue
  scene.render()
}

window.onload = onLoad
