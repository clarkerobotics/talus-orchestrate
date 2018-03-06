<template>
<div class="menu">
	<nav>
		<ul>
			<li class="nav-item">
				<img src="/static/icons/menu.svg">
				<span>Menu</span>
			</li>
			<li class="nav-item">
				<img src="/static/icons/options.svg">
				<span>Manual</span>
			</li>
			<li class="nav-item">
				<img src="/static/icons/arrow-expand.svg">
				<span>Cartesian</span>
			</li>
			<li class="nav-item">
				<img src="/static/icons/flask.svg">
				<span>Scene</span>
			</li>
		</ul>
	</nav>
	<div class="menu-content">
		<h2>Talus Orchestrator</h2>
		<div class="github">
			<a href="https://github.com/clarkerobotics/talus-orchestrate">
				<img src="/static/icons/github.svg">
			</a>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
    }
  },

  methods: {
  },
}
</script>

<style scoped>
.menu {
	background: #2b2c3a;
	border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
	height: 80px;
}

ul {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}

.menu-content {
	width: 75%;
}

.menu-content h2 {
	font: 300 23pt/24pt Avenir, Helvetica, sans-serif;
	color: white;
	text-align: center;
}

.github {
	position: absolute;
	right: 0;
	bottom: 0;
}
.github a {
	display: flex;
	height: 80px;
	width: 80px;
}
.github img {
	filter: invert(.6);
	width: 30px;
	margin: auto;
}

nav {
	width: 25%;
}
nav ul {
	display: flex;
}

.nav-item {
	color: white;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	text-align: center;
}

.nav-item img {
	filter: invert(.8);
  max-height: 35px;
	width: 100%;
	margin: 13px 0 3px;
}
.nav-item img:hover {
	filter: invert(1);
}
.nav-item img:nth-child(1) {
	max-height: 30px;
  margin-top: 18px;
}
.nav-item span {
	font-size: 9pt;
}
</style>
