const OrbitControls = require('three-orbit-controls')

class SceneHelper {

  constructor(options = {}) {
    // Defaults
    this.options = options
    this.three = options.THREE
    this.render = () => {}

    // start it!
    this.orbital = OrbitControls(options.THREE)
    this.init()

    return this;
  }

  init() {
    var _this = this
    let el = document.getElementById(_this.options.element)
    let sceneWidth = el.clientWidth || window.innerWidth
    let sceneHeight = el.clientHeight || window.innerHeight
    let targetRotation = 0
    this.scene = new _this.three.Scene({ alpha: true })
    this.scene.background = new _this.three.Color(0xf2f2f2)

    // create a camera, which defines where we're looking at.
    this.camera = new _this.three.PerspectiveCamera(60, sceneWidth / sceneHeight, 0.1, 1000)
    this.camera.position.set(130, 0, 350)

    // create a render and set the size
    this.webGLRenderer = new _this.three.WebGLRenderer()
    this.webGLRenderer.setSize(sceneWidth, sceneHeight)
    this.webGLRenderer.shadowMap.enabled = true
		this.webGLRenderer.shadowMap.type = _this.three.PCFSoftShadowMap;

    // position and point the camera to the center of the scene
    this.camera.lookAt(new _this.three.Vector3(130, 60, 350))
    var controls = new this.orbital(_this.camera, el)
    controls.target.set(0, 60, 0);
    this.camera.position.copy(controls.target).add(new _this.three.Vector3(130, 0, 350));
    controls.minDistance = 120
		controls.maxDistance = 500

    // Add some #cute lights
    var ambient = new _this.three.AmbientLight(0xffffff, 0.42)
		this.scene.add( ambient )
		this.spotLight = new _this.three.SpotLight(0xffffff, 0.8)
		this.spotLight.position.set(150, 250, 200)
		this.spotLight.angle = Math.PI / 4
		this.spotLight.penumbra = 0.25
		this.spotLight.decay = 2
		this.spotLight.distance = 2000
    this.spotLight.castShadow = true
		this.spotLight.shadow.mapSize.width = 2024
		this.spotLight.shadow.mapSize.height = 2024
		this.spotLight.shadow.camera.near = 100
		this.spotLight.shadow.camera.far = 1000
    this.scene.add(_this.spotLight)
		this.spotLight2 = new _this.three.SpotLight(0xffffff, 0.75)
		this.spotLight2.position.set(-350, 120, -150)
		this.spotLight2.angle = - (Math.PI / 4)
		this.spotLight2.penumbra = 0.5
		this.spotLight2.decay = 2
		this.spotLight2.distance = 1000
    this.spotLight2.castShadow = false
    this.scene.add(_this.spotLight2)

    // Add a #cute base plane
    var planeGeo = new _this.three.PlaneGeometry(2000, 2000, 20)
    var wireframe = new _this.three.WireframeGeometry(planeGeo)
    var planeMat = new _this.three.MeshPhongMaterial( { color: 0xcccccc, dithering: true, side: _this.three.DoubleSide } )
    planeGeo.translate(0, 0, -88.25)
    planeGeo.rotateX(- (Math.PI / 2))
    var plane = new _this.three.Mesh(planeGeo, planeMat)
    plane.receiveShadow = true
    this.scene.add(plane)

    // // HIDDEN: Useful for debugging light
    // var lightHelper = new _this.three.SpotLightHelper( _this.spotLight2 );
		// this.scene.add( lightHelper );
		// var shadowCameraHelper = new _this.three.CameraHelper( _this.spotLight.shadow.camera );
	  // this.scene.add( shadowCameraHelper );

    // add the output of the renderer to the html element
    document.getElementById(_this.options.element).appendChild(_this.webGLRenderer.domElement)

    var y = 50
    this.render = () => {
      // render using requestAnimationFrame
      requestAnimationFrame(_this.render)
      this.webGLRenderer.render(_this.scene, _this.camera)
    }

    return this;
  }

  add(item) {
    this.scene.add(item)
  }

  render() {
    this.render()
  }
}

export { SceneHelper }
