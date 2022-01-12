<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&family=Montserrat:wght@500;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap');
@font-face {
  font-family: "tungsten";
  src: url("./assets/fonts/Tungsten-Bold.ttf");
}
.flex-row {
  display: flex;
  flex-direction: row;

}
.gradient-background {
  background-color: #0f1923e3;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
body {
  background-image: url("./assets/DEMO.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  height: 1080px;
  width: 1920px;
  display: flex;
  justify-content: center;
}


.defenderColor {
  color: #28ae76c5;
}

.attackerColor {
  color: #ef555fd0;
}
</style>
