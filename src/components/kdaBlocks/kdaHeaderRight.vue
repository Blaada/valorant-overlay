<template>
<div class="kdaHeader borderAttackerRight">
    <div class="kdaValuesHeader">
        <span>K</span>
        <span>D</span>
        <span>A</span>
    </div>
    <div class="kdaACSHeader attackerColor">
        <span>CREDITS</span>
    </div>
    <div class="agentPictureHeaderRight">FOX GAMING<img src="@/assets/teams/fox.png" alt="agent"/></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.kdaTeamName {
  display: flex;
  align-items: center;
  width: 100px;
  color: white;
  font-family: 'tungsten';
  font-weight: 300;
  font-size: 25px;
}
.agentPictureHeaderRight img {
  width: 58px;
  margin-right: 5px;

}
.agentPictureHeaderRight {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 210px;
    color: white;
  font-family: 'tungsten';
  font-weight: 300;
  font-size: 25px;
}
.kdaValuesHeader {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  color: rgb(122, 122, 122);
  font-family: 'Maven Pro';
  font-weight: 300; 
}


.kdaHeader {
  height: 60px;
  border-bottom: 2px solid #717c844f;
  background-color: #0F1923;
  display: flex;
  justify-content: space-between;
}
</style>