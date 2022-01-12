<template>
    <div class="weaponContainer flex-row" v-bind:class="{ 'weaponContainerLeft': isBlue, 'weaponContainerRight': !isBlue }" >
      <img v-bind:class="{ 'weapon-left': isBlue, 'weapon-right': !isBlue }" :src="require('@/assets/weapons/'+weapon+'.png')" alt="agent">
    </div>
</template>

<script>
export default {
  props: ['isBlue', 'weapon']
}
</script>

<style>
.weaponContainer { 
  position: relative; 
  padding: 5px;
  width: 200px;
  align-items: center;
  overflow: hidden;
  animation: 3s weaponAnimation;
}

.weaponContainerLeft {
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(44,62,80,0) 100%, rgba(44,62,80,1) 100%);
}

.weaponContainerRight {
  background: rgb(0,0,0);
  background: linear-gradient(264deg, rgba(0, 0, 0, 0.3) 0%, rgba(44,62,80,0) 100%, rgba(44,62,80,1) 100%);
}
.weapon-left {
  height: 80px;
  transform: scaleX(-1);
}

.weapon-right {
  position: absolute;
  right: 5px;
  height: 80px;
}

@keyframes weaponAnimation {
  from {
    opacity: 1;
    width: 200px;
  } to {
    opacity: 0;
    width: 0;
  }
}
 
</style>