<template>
    <div class="kdaBlock borderDefenderLeft">
        <div class="agentPicture">
          <img src="@/assets/agentsIcons/Astra.png" alt="agent"/>
        </div>
        <div class="kdaAgentName">
          <span>Astra</span>
        </div>
        <div class="kdaACS">
          <span>242</span>
        </div>
        <div class="kdaValues">
          <span>3</span>
          <span>19</span>
          <span>14</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.kdaValues {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  color: white;
  font-family: 'Maven Pro';
  font-weight: 300; 
}
.kdaACS {
  display: flex;
  align-items: center;
  width: 50px;
  color: rgb(206, 206, 206);
  font-family: 'Maven Pro';
  font-weight: 200;
}
.kdaAgentName {
  display: flex;
  align-items: center;
  width: 50px;
  color: white;
  font-family: 'Maven Pro';
  font-weight: 300;
}
.agentPicture img {
  width: 40px;
}
.agentPicture {
  width: 100px;
}
.kdaBlock {
  height: 45px;
  background-color: #0F1923;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(167, 167, 167);
}
</style>