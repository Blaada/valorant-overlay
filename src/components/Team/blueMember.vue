<template>
   <div class="flex-row member">
       <agent :isBlue="true" :name="name" :picture="picture"/>
       <stats :stats="stats" :isBlue="true"/>
       <weapon :isBlue="true" :weapon="weapon"/>
    </div>
</template>

<script>
import Agent from './agent.vue'
import Stats from './stats.vue'
import Weapon from './weapon.vue'
export default {
    props: ['name', 'stats', 'picture', 'weapon'],
    components: {
        Agent,
        Stats,
        Weapon
    }
 }
</script>

<style>
.member {
  height: 100px;
}
</style>