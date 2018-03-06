webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),o=i("NYxO"),s={toolhead:void 0,joints:{a:0,b:0,c:0,d:0,e:50,f:0}};a.a.use(o.a);var n=new o.a.Store({strict:!1,actions:{update:function(t,e){(0,t.commit)("UPDATE",{key:e.key,value:e.value})},updateJoint:function(t,e){(0,t.commit)("UPDATE_JOINT",{id:e.id,value:e.value})}},getters:{toolhead:function(t){return t.toolhead},joints:function(t){return t.joints}},mutations:{UPDATE:function(t,e){var i=e.key,a=e.value;t[i]=a},UPDATE_JOINT:function(t,e){var i=e.id,a=e.value;t.joints[i]=a}},state:s}),r=i("Dd8w"),l=i.n(r),c=[{name:"Section A",label:"a",min:"-50",max:"50"},{name:"Section B",label:"b",min:"-28",max:"28"},{name:"Section C",label:"c",min:"-50",max:"50"},{name:"Section D",label:"d",min:"-25",max:"25"},{name:"Section E",label:"e",min:"0",max:"100"},{name:"Section F",label:"f",min:"-50",max:"50"}],h={name:"Controls",data:function(){return{axis:c}},methods:l()({},Object(o.b)(["updateJoint"]),{rotateAxis:function(t,e){var i=2*Math.PI*(parseInt(t.active,10)/100),a=i;switch(e){case"b":"z";break;case"c":a=i/1.4,"z";break;case"e":a=(i-Math.PI)/1.4,"z"}this.updateJoint({id:e,value:a}),this.$event.$emit("UPDATE:JOINT",{id:e,value:a})}})},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controls"},[i("h2",[t._v("Manual Joint Jog")]),t._v(" "),i("div",{staticClass:"axis-controls"},t._l(t.axis,function(e){return i("div",[i("label",[t._v(t._s(e.name))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"item.active"}],attrs:{type:"range",min:e.min,max:e.max},domProps:{value:e.active},on:{input:function(i){t.rotateAxis(e,e.label)},__r:function(i){t.$set(e,"active",i.target.value)}}})])}))])},staticRenderFns:[]};var _=i("VU/8")(h,d,!1,function(t){i("nsqk")},"data-v-64dab95c",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("nav",[i("ul",[i("li",{staticClass:"nav-item"},[i("img",{attrs:{src:"/static/icons/menu.svg"}}),t._v(" "),i("span",[t._v("Menu")])]),t._v(" "),i("li",{staticClass:"nav-item"},[i("img",{attrs:{src:"/static/icons/options.svg"}}),t._v(" "),i("span",[t._v("Manual")])]),t._v(" "),i("li",{staticClass:"nav-item"},[i("img",{attrs:{src:"/static/icons/arrow-expand.svg"}}),t._v(" "),i("span",[t._v("Cartesian")])]),t._v(" "),i("li",{staticClass:"nav-item"},[i("img",{attrs:{src:"/static/icons/flask.svg"}}),t._v(" "),i("span",[t._v("Scene")])])])]),t._v(" "),i("div",{staticClass:"menu-content"},[i("h2",[t._v("Talus Orchestrator")]),t._v(" "),i("div",{staticClass:"github"},[i("a",{attrs:{href:"https://github.com/clarkerobotics/talus-orchestrate"}},[i("img",{attrs:{src:"/static/icons/github.svg"}})])])])])}]};var u=i("VU/8")({name:"Menu",data:function(){return{}},methods:{}},v,!1,function(t){i("U1zg")},"data-v-0531ded2",null).exports,f="ffffff",m="1848b5",p="A_Segment",g="B_Segment",w="C_Segment",b="D_Segment",M="E_Segment",R="F_Segment",S=[{section:"0",translate:[0,0,0],rotation:[0,0,0],pieces:[{file:p+"/Base_Motor_Plate_v1.stl",color:m},{file:p+"/Base_Motor_Mount_v1.stl",color:m},{file:p+"/Base_Motor_Roller_v2.stl",color:m},{file:p+"/Base_Motor_Roller_extra.stl",color:m},{file:p+"/Base_Mount_Bottom_v1.stl",color:f},{file:p+"/Base_Mount_Top_v1.stl",color:f},{file:p+"/Motor_Mock.stl",color:"999999"}]},{section:"a",translate:[0,0,0],rotation:[0,0,0],pieces:[{file:p+"/Base_Gear_Bottom_v1.stl",color:m},{file:p+"/Base_Gear_Top_v1.stl",color:m},{file:p+"/Base_Main_v1.stl",color:f},{file:p+"/Base_Cover_v1.stl",color:f},{file:p+"/Base_Right_Side_v1.stl",color:f},{file:p+"/Base_Left_Side_v1.stl",color:f},{file:p+"/Base_Main_Door_v1.stl",color:m},{file:p+"/Base_Main_Door_Extra.stl",color:m}]},{section:"b",translate:[0,0,0],rotation:[0,Math.PI,0],pieces:[{file:g+"/RB_Middle_Left_Bottom_v3.stl",color:f},{file:g+"/RB_Middle_Left_Top_v3.stl",color:f},{file:g+"/RB_Middle_Right_Bottom_v3.stl",color:f},{file:g+"/RB_Middle_Right_Top_v3.stl",color:f},{file:g+"/RB_Motor_Cover_v3.stl",color:m},{file:g+"/RB_Side_Left_v3.stl",color:f},{file:g+"/RB_Side_Left_Cover_v3.stl",color:f},{file:g+"/RB_Side_Right_v3.stl",color:f},{file:g+"/RB_Side_Right_Cover_v3.stl",color:f}]},{section:"c",translate:[0,230,0],rotation:[0,Math.PI,0],pieces:[{file:w+"/RC_Main_v1.stl",color:f},{file:w+"/RC_Motor_Mount_v2.stl",color:m}]},{section:"d",translate:[0,240,0],rotation:[0,Math.PI,0],pieces:[{file:b+"/RD_Base_v2.stl",color:f},{file:b+"/RD_Base_Cover_v1.stl",color:f},{file:b+"/RD_Base_Spacer_v1.stl",color:m},{file:b+"/RD_Left_Vertical_v1.stl",color:f},{file:b+"/RD_Left_Vertical_Cover_v2.stl",color:f},{file:b+"/RD_Right_Vertical_v1.stl",color:f},{file:b+"/RD_Right_Vertical_Cover_v1.stl",color:f}]},{section:"e",translate:[0,0,0],rotation:[0,0,0],pieces:[{file:M+"/RE_Main_v3.stl",color:f},{file:M+"/RE_Cover_v3.stl",color:f},{file:M+"/RE_Pulley.stl",color:"999999"}]},{section:"f",translate:[0,0,0],rotation:[0,0,0],pieces:[{file:R+"/Toolhead_QuickClip_Base_v4.stl",color:m},{file:R+"/Toolhead_Base_Plate_Top_v4.stl",color:m}]}],L=i("Zrlr"),B=i.n(L),C=i("wxAW"),E=i.n(C),x=i("qKrd"),T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return B()(this,t),this.options=e,this.three=e.THREE,this.render=function(){},this.orbital=x(e.THREE),this.init(),this}return E()(t,[{key:"init",value:function(){var t=this,e=this,i=document.getElementById(e.options.element),a=i.clientWidth||window.innerWidth,o=i.clientHeight||window.innerHeight;this.scene=new e.three.Scene({alpha:!0}),this.scene.background=new e.three.Color(15921906),this.camera=new e.three.PerspectiveCamera(60,a/o,.1,1e3),this.camera.position.set(130,0,350),this.webGLRenderer=new e.three.WebGLRenderer,this.webGLRenderer.setSize(a,o),this.webGLRenderer.shadowMap.enabled=!0,this.webGLRenderer.shadowMap.type=e.three.PCFSoftShadowMap,this.camera.lookAt(new e.three.Vector3(130,60,350));var s=new this.orbital(e.camera,i);s.target.set(0,60,0),this.camera.position.copy(s.target).add(new e.three.Vector3(130,0,350)),s.minDistance=120,s.maxDistance=500;var n=new e.three.AmbientLight(16777215,.42);this.scene.add(n),this.spotLight=new e.three.SpotLight(16777215,.8),this.spotLight.position.set(150,250,200),this.spotLight.angle=Math.PI/4,this.spotLight.penumbra=.25,this.spotLight.decay=2,this.spotLight.distance=2e3,this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=2024,this.spotLight.shadow.mapSize.height=2024,this.spotLight.shadow.camera.near=100,this.spotLight.shadow.camera.far=1e3,this.scene.add(e.spotLight),this.spotLight2=new e.three.SpotLight(16777215,.75),this.spotLight2.position.set(-350,120,-150),this.spotLight2.angle=-Math.PI/4,this.spotLight2.penumbra=.5,this.spotLight2.decay=2,this.spotLight2.distance=1e3,this.spotLight2.castShadow=!1,this.scene.add(e.spotLight2);var r=new e.three.PlaneGeometry(2e3,2e3,20),l=(new e.three.WireframeGeometry(r),new e.three.MeshPhongMaterial({color:13421772,dithering:!0,side:e.three.DoubleSide}));r.translate(0,0,-88.25),r.rotateX(-Math.PI/2);var c=new e.three.Mesh(r,l);c.receiveShadow=!0,this.scene.add(c),document.getElementById(e.options.element).appendChild(e.webGLRenderer.domElement);return this.render=function(){requestAnimationFrame(e.render),t.webGLRenderer.render(e.scene,e.camera)},this}},{key:"add",value:function(t){this.scene.add(t)}},{key:"render",value:function(){this.render()}}]),t}(),P=i("Ml+6"),k=new(i("0uQj")(P)),D={name:"Simulator",data:function(){return{scene:void 0}},computed:l()({},Object(o.c)(["joints"])),methods:{init:function(){var t={},e=void 0;S.forEach(function(e){var i=new P.Object3D;i.translateX(e.translate[0]),i.translateY(e.translate[1]),i.translateZ(e.translate[2]),t[e.section]=i,e.pieces.forEach(function(t){k.load("./static/stl/"+t.file,function(a){a.rotateX(e.rotation[0]),a.rotateY(e.rotation[1]),a.rotateZ(e.rotation[2]);var o=new P.MeshLambertMaterial({color:"#"+t.color}),s=new P.Mesh(a,o);s.castShadow=!0,i.add(s)})})}),t.e.add(t.f),t.d.add(t.e),t.c.add(t.d),t.b.add(t.c),t.a.add(t.b),t[0].add(t.a),(e=t[0]).scale.set(.4,.4,.4),this.scene.add(e),this.scene.groups=t,this.scene.render()},updateJoints:function(t){var e=t.id,i=t.value;switch(e){case"a":this.scene.groups.a.rotation.y=i;break;case"b":this.scene.groups.b.rotation.z=i;break;case"c":this.scene.groups.c.rotation.z=i;break;case"d":this.scene.groups.d.rotation.y=i;break;case"e":this.scene.groups.e.rotation.z=i;break;case"f":this.scene.groups.f.rotation.y=i}}},mounted:function(){this.scene=new T({THREE:P,element:"simulator-wrap"}),this.init()},created:function(){this.$event.$on("UPDATE:JOINT",this.updateJoints)},watch:{joints:"updateJoints"}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"simulator"},[e("div",{attrs:{id:"simulator-wrap"}})])}]};var A={name:"App",components:{Controls:_,Menu:u,Simulator:i("VU/8")(D,y,!1,function(t){i("nR4h")},"data-v-778c5dde",null).exports}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Controls"),this._v(" "),e("Simulator"),this._v(" "),e("Menu")],1)},staticRenderFns:[]};var J=i("VU/8")(A,I,!1,function(t){i("STpX")},null,null).exports;a.a.config.productionTip=!1,a.a.prototype.$event=new a.a,new a.a({el:"#app",components:{App:J},template:"<App/>",store:n})},STpX:function(t,e){},U1zg:function(t,e){},nR4h:function(t,e){},nsqk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90f35043bc36dc8407cb.js.map