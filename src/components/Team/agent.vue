<template>
    <div class="agent">
        <img  v-bind:class="{'pictureRight': !isBlue }" class="gradient-background pictureName" :src="require('@/assets/agentsIcons/'+picture+'.png')" alt="agent">
        <span v-bind:class="{ 'leftSide': isBlue, 'rightSide': !isBlue }" class="agentName">{{name}}</span>
    </div>
</template>

<script>
export default {
  props: ['isBlue', 'name', 'picture']
}
</script>

<style>
.pictureName {
  width: 100px;
  height: 100px;
}
.pictureRight {
  transform: scaleX(-1);
}
.agent {
  position: relative;
}
.agentName {
  position: absolute;
  bottom: 0;
  font-family: 'Maven Pro';
  font-weight: 600;
  color: white;
}

.leftSide {
  left: 0;
}

.rightSide {
  right: 0;
}

/* .agent::after {
  content: "";
  height: 100px;
  width: 100px;
  background-color: grey;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
} */
</style>