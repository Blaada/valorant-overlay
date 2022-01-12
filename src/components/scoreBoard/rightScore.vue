<template>
    <div class="rightScoreContainer">
        <div v-bind:class="{'green': isDefender, 'red': !isDefender }" class="rightTeamColor"></div>
        <span class="score">{{score}}</span>
        
    <div class="teamIcon">
        <img class="backIcon" :src="require('@/assets/teams/'+teamIcon+'.png')" alt="team"/>
        <img class="icon" :src="require('@/assets/teams/'+teamIcon+'.png')" alt="team"/>
        <span class="teamName">{{teamName}}</span>
    </div>
    </div>
</template>

<script>
export default {
props: ['score', 'teamName', 'teamIcon', 'isDefender']
}
</script>

<style scoped>
.teamIcon .icon {
  position: absolute;
  display: flex;
  z-index: 6;
  transform: scale(0.5);
  top: -10px;
}
.backIcon {
  transform: scale(1.2);
  z-index: 4;
  opacity: 0.2;
}
.teamIcon {
  position: relative;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  left: 55px;
}
.teamName {
    z-index: 7;
    position: absolute;
    color: white;
    font-family: 'tungsten', sans-serif;
    font-size: 18px;
    bottom: 20px;
    
}
.score {
    position: absolute;
    color: white;
    font-family: 'tungsten', sans-serif;
    font-size: 48px;
    left: 20px;
}
.rightTeamColor {
  position: absolute;
  left: 0px;
  height: 72px;
  width: 14px;
}
.green {
  background-color: #28ae76c5;
}
.red {
  background-color: #ef555fd0;;
}
.rightScoreContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0;
    right: 713px;
    height: 72px;
    width: 160px;
    background-color: #0F1923;
    border-bottom-right-radius: 13px;
    overflow: hidden;
}
</style>