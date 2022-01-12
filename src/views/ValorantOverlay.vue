<template>
<div>
  <span class="roundCount">ROUND 8</span>
  <leftScore 
    :score="8" 
    :teamName="teams.team1.name + ' TEAM'" 
    :teamIcon="teams.team1.icon" 
    :isDefender="teams.team1.isDefender"/>

  <rightScore 
    :score="11" 
    :teamName="teams.team2.name + ' TEAM'" 
    :teamIcon="teams.team2.icon" 
    :isDefender="teams.team2.isDefender"/>  
  <div class="hideTime" v-if="spike_status"></div>
  <svg class="spike" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.96 116.88"><defs></defs><path class="cls-1" d="M183.64,131c-5.09,7.46-14.3,10.78-20.22,12.2a23.55,23.55,0,0,1-11,0c-5.92-1.41-15.13-4.73-20.23-12.19,0,0-1.58,1.32-9.1,6.59,14.26,27.57,21.89,38.91,25.08,43.13a5.6,5.6,0,0,0,4.48,2.23H162a7.89,7.89,0,0,0,6.39-3.26c3.57-4.92,11.09-16.53,24.31-42.1C185.22,132.35,183.64,131,183.64,131Zm-37.92,37.26L157.87,148,170,168.29Z" transform="translate(-94.79 -66.1)"/><path class="cls-1" d="M162.83,78.7c8.95.63,16.41,6.84,20.63,11.24a23.62,23.62,0,0,1,5.61,9.57c1.76,5.83,3.54,15.46-.35,23.63,0,0,1.94.7,10.28,4.54,10.94-17.23,17.14-28.67,20.63-35.95a21.52,21.52,0,0,0-.81-20.13h0a11,11,0,0,0-9.51-5.49c-7,0-20.76,0-46.48.09C162.85,75.54,162.83,78.7,162.83,78.7Zm51.29,14-23.62-.3,11.39-20.7Z" transform="translate(-94.79 -66.1)"/><path class="cls-1" d="M153.7,66.2c-25.72-.11-39.51-.11-46.47-.09a11.06,11.06,0,0,0-9.52,5.49h0a21.49,21.49,0,0,0-.8,20.13c3.49,7.28,9.68,18.72,20.63,36,8.34-3.84,10.27-4.54,10.27-4.54-3.88-8.17-2.11-17.8-.35-23.63a23.85,23.85,0,0,1,5.61-9.57c4.22-4.4,11.69-10.61,20.63-11.24C153.7,78.7,153.69,75.54,153.7,66.2Zm-39,5.51L126,92.41l-23.61.3Z" transform="translate(-94.79 -66.1)"/><path class="cls-1" d="M157.41,85.73,136.4,98v24.48l21,12.24,21-12.24V98ZM170,117.3l-12.61,7.1-12.61-7.1V103.11L157.41,96,170,103.11Z" transform="translate(-94.79 -66.1)"/></svg>
 

  <div class="flex-row teamsContainer">
    <div class="flex-col teams" >
      <blueMember
        v-for="(agent, index) in alive_agents_blue" 
        :key="agent"
        :name="agent" 
        :picture="agent" 
        :stats="{shield: getShieldByIndex('blue', index).shield, ultimate: nameToLowerCase(agent) + '_ult', ultimatePoints: getUltimatePoint(agent, index, 'blue')}" 
        :weapon="getShieldByIndex('blue', index).weapon"/>

    </div>

    <div class="flex-col teams rightTeam">
      <redMember 
        v-for="(agent, index) in alive_agents_red" 
        :key="agent"
        :name="agent" 
        :picture="agent" 
        :stats="{shield: getShieldByIndex('red', index).shield, ultimate: nameToLowerCase(agent) + '_ult', ultimatePoints: getUltimatePoint(agent, index, 'red')}" 
        :weapon="getShieldByIndex('red', index).weapon"/>
    </div>
  </div>
</div>
</template>

<script>
import teams from "../assets/data/teams.json";
import gameData from "../assets/data/inputs.json";
import ultimatePoints from "../assets/data/ultimatePoints.json";
import blueMember from '../components/Team/blueMember.vue'
import redMember from '../components/Team/redMember.vue'
import leftScore from '../components/scoreBoard/leftScore.vue'
import rightScore from '../components/scoreBoard/rightScore.vue'
export default {
  components: { 
    blueMember,
    redMember,
    leftScore,
    rightScore
  },
  name: 'ValorantOverlay',
  data() {
    return {
      alive_agents_blue: gameData.event.alive_agents.blue,
      alive_agents_red: gameData.event.alive_agents.red,
      agents_with_loadouts_shields: gameData.event.agents_with_loadouts_shields,
      ultimatePoints:ultimatePoints,
      teams: teams,
      spike_status: gameData.event.spike_status == "False" ? false : true
      
    }
  },
  mounted() {
    this.$socket.on('user-connected', socketId => {
      console.log("connected" + socketId)
    })
  },
  methods: {
    nameToLowerCase(name) {
      return String(name).toLowerCase()
    },
    getUltimatePoint(agent, index, type) {
      const ultiPoints = this.getShieldByIndex(type, index).ultimatePoint
      const agentPoints = this.ultimatePoints[String(agent).toLowerCase()]
      if (!ultiPoints) {
        return "READY"
      }
      return [ultiPoints, '/' , agentPoints].join('')
    },
    getShieldByIndex(type, index) {
      const agent = this.agents_with_loadouts_shields[type][index]
      return {weapon: agent[1], shield: String(agent[2]).toLowerCase(), ultimatePoint: agent[3]?.number}
    }
  }
}
</script>

<style scoped>
.hideTime {
  height: 40px;
  width: 124px;
  background-color: #0F1923;
  position: absolute;
  left: 897px;
  top: 29px;
}
.spike {
  position: absolute;
  left: 935px;
  top: 77px;
  width: 50px;
  fill: #ef555f;
  animation: 2s spikeAnimation;
  animation-fill-mode: forwards;
}
.roundCount {
  position: absolute;
  color: white;
  font-family: 'montserrat', sans-serif;
  font-size: 14px;
  left: 925px;
}
.rightTeam {
  position: absolute;
  right: -10px;
}
.teams {
  gap: .2rem;
}
.teamsContainer {
  position:relative;
  justify-content: space-between;
  position: absolute;
  padding: .5rem;
  bottom: -110px;
  left: 0;
  width: 99%;
}

@keyframes spikeAnimation {
  from {
    left: 935px;
    top: 77px;
    width: 50px;
    fill: #ffffff;
  }
  to {
    left: 925px;
    top: 25px;
    width: 70px;
    fill: #ef555f;
  }
}
</style>
