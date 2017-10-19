class SceneHelper {

  constructor(options = {}) {
    // Defaults
    this.options = options
    this.three = options.THREE
    this.render = () => {}

    // start it!
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

    // add spotlight for the shadows
    this.spotLight = new _this.three.SpotLight(0xffffff)
    this.spotLight.position.set(150, 150, 150)
    this.scene.add(_this.spotLight)

    // add the output of the renderer to the html element
    document.getElementById(_this.options.element).appendChild(_this.webGLRenderer.domElement)

    var y = 50
    this.render = () => {
      // if (this.groups) {
      //   this.groups.a.rotation.y += ( targetRotation - this.groups.a.rotation.y ) * 0.5;
      // }

      // y += ( targetRotation - y ) * 0.05;
      // this.camera.lookAt(new _this.three.Vector3(0, 50, y))

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
