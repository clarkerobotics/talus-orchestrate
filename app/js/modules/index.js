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

  // Load all stl files
  stls.forEach(function(section) {
    var sectionGroup = new THREE.Object3D()
    groups[section.section] = sectionGroup

    // load all section pieces
    section.pieces.forEach((piece) => {
      loader.load(`stl/${piece.file}`, function (geometry) {
        geometry.translate(section.translate[0], section.translate[1], section.translate[2])
        geometry.rotateX(section.rotation[0])
        geometry.rotateY(section.rotation[1])
        geometry.rotateZ(section.rotation[2])

        var mat = new THREE.MeshLambertMaterial({ color: `#${piece.color}` })
        var item = new THREE.Mesh(geometry, mat)
        sectionGroup.add(item)
      })
    })

    sectionGroup.scale.set(0.4, 0.4, 0.4);
    scene.add(sectionGroup);
  })
  // console.log('groups', groups)
  scene.groups = groups

  // Add a cute base plane
  var planeGeo = new THREE.PlaneGeometry(1000, 1000, 20)
  var wireframe = new THREE.WireframeGeometry( planeGeo );
  var planeMat = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide })
  planeGeo.translate(0, 0, 89)
  planeGeo.rotateX(Math.PI / 2)
  var plane = new THREE.Mesh(planeGeo, planeMat)
  scene.add(plane)

  // Begin render queue
  scene.render()
}

window.onload = onLoad
