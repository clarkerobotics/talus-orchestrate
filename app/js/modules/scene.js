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
    this.camera = new _this.three.PerspectiveCamera(55, sceneWidth / sceneHeight, 0.1, 1000)
    this.camera.position.set(100, 100, 350)

    // create a render and set the size
    this.webGLRenderer = new _this.three.WebGLRenderer()
    this.webGLRenderer.setSize(sceneWidth, sceneHeight)
    this.webGLRenderer.shadowMapEnabled = true

    // position and point the camera to the center of the scene
    this.camera.lookAt(new _this.three.Vector3(0, 50, 0))
    var controls = new this.orbital(_this.camera, el)

    // Add some #cute lights
    var ambient = new _this.three.AmbientLight( 0xffffff, 0.4 );
		this.scene.add( ambient );
		this.spotLight = new _this.three.SpotLight( 0xffffff, 0.75 );
		this.spotLight.position.set(250, 250, 150);
		this.spotLight.angle = Math.PI / 4;
		this.spotLight.penumbra = 0.05;
		this.spotLight.decay = 2;
		this.spotLight.distance = 2000;
    this.scene.add(_this.spotLight)
		this.spotLight2 = new _this.three.SpotLight( 0xffffff, 0.75 );
		this.spotLight2.position.set(-250, 50, 150);
		this.spotLight2.angle = - (Math.PI / 4);
		this.spotLight2.penumbra = 0.05;
		this.spotLight2.decay = 2;
		this.spotLight2.distance = 2000;
    this.scene.add(_this.spotLight2)

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
