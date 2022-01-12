<template>
<div class="kdaHeader borderDefenderLeft">
    <div class="agentPictureHeader">
      <img src="@/assets/teams/mlc.png" alt="agent"/>
      MLC ESPORTS
    </div>
    <div class="kdaACSHeader defenderColor">
        <span>CREDITS</span>
    </div>
    <div class="kdaValuesHeader">
        <span>K</span>
        <span>D</span>
        <span>A</span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.agentPictureHeader img {
  width: 58px;
  margin-left: 5px;
}
.agentPictureHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 210px;
  color: white;
  font-family: 'tungsten';
  font-weight: 300;
  font-size: 25px;
  text-align: right;
  
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

.kdaACSHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-family: 'Maven Pro';
  font-weight: 200;
}

.kdaHeader {
  height: 60px;
  border-bottom: 2px solid #717c844f;
  background-color: #0F1923;
  display: flex;
  justify-content: space-between;
}
</style>