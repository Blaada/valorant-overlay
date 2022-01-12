<template>
    <div v-bind:class="{ 'stats-background-defenders': isBlue, 'stats-background-attackers': !isBlue }" class="stats flex-col">
        <img class="shield" :src="require('@/assets/shieldIcons/'+stats.shield+'.svg')" alt="shield"/>
        <img class="ultimate" :src="require('@/assets/ultimateIcons/'+stats.ultimate+'.png')" alt="shield"/>
        <span>{{stats.ultimatePoints}}</span>
    </div>
</template>

<script>
export default {
  props: ['stats', 'isBlue']
}
</script>

<style>

.stats-background-attackers {
  background-color: #ef555fd0;
}
.stats-background-defenders {
  background-color: #28ae76c5;
}
.stats {
  position: relative;
  width: 40px;
  justify-content: center;
  /* animation: 2s statsAnimation; */
}
.stats span {
  width: 40px;
  position: absolute;
  color: white;
  font-family: 'Maven Pro';
  font-weight: 300;
  font-size: 10px;
  text-align: center;
  bottom: 3px;
}
.shield {
  top: 9px;
}
.ultimate {
  bottom: 10px;
}
.stats img{
  height: 30px;
  width: 30px;
  position: absolute;
  margin: 5px;
}

@keyframes statsAnimation {
  from {
    width: 40px;
    opacity: 1;
  }
  to {
    width: 0px;
    opacity: 0;
  }
}
</style>