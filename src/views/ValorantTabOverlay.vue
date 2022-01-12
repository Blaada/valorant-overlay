<template>
  <div>
    <div class="kdaLeft">
      <kda-header-left/>
      <kda-block-left/>
      <kda-block-left/>
      <kda-block-left/>
      <kda-block-left/>
      <kda-block-left/>
    </div>
    <div class="kdaRight">
      <kda-header-right/>
      <kda-block-right/>
      <kda-block-right/>
      <kda-block-right/>
      <kda-block-right/>
      <kda-block-right/>
    </div>

  </div>
</template>

<script>

import kdaBlockRight from '../components/kdaBlocks/kdaBlockRight.vue'
import kdaBlockLeft from '../components/kdaBlocks/kdaBlockLeft.vue'
import KdaHeaderLeft from '../components/kdaBlocks/kdaHeaderLeft.vue'
import KdaHeaderRight from '../components/kdaBlocks/kdaHeaderRight.vue'


export default {
  components: { kdaBlockLeft, KdaHeaderLeft, kdaBlockRight, KdaHeaderRight },

}
</script>

<style scoped>

.kdaRight {
  position: absolute;
  width: 515px;
  top: 292px;
  right: 435px;
}
.kdaLeft {
  position: absolute;
  display: flex;
  width: 515px;
  flex-direction: column;
  top: 292px;
  left: 435px;
}

.borderAttackerLeft {
  box-shadow: -6px 0px 4px 0px #ef555fd0;
  -webkit-box-shadow: -6px 0px 4px 0px #ef555fd0;
  -moz-box-shadow: -6px 0px 4px 0px #ef555fd0;
}

.borderDefenderLeft {
  box-shadow: -6px 0px 4px 0px #28ae76c5;
  -webkit-box-shadow: -6px 0px 4px 0px #28ae76c5;
  -moz-box-shadow: -6px 0px 4px 0px #28ae76c5;
}

.borderAttackerRight {
  box-shadow: 6px 0px 4px 0px #ef555fd0;
  -webkit-box-shadow: 6px 0px 4px 0px #ef555fd0;
  -moz-box-shadow: 6px 0px 4px 0px #ef555fd0;
}

.borderDefenderRight {
   box-shadow: 6px 0px 4px 0px #28ae76c5;
  -webkit-box-shadow: 6px 0px 4px 0px #28ae76c5;
  -moz-box-shadow: 6px 0px 4px 0px #28ae76c5;
  
}

</style>