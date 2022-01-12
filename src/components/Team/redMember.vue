<template>
   <div class="flex-row member">
       <weapon :isBlue="false" :weapon="weapon"/>
       <stats :stats="stats" :isBlue="false"/>
       <agent :isBlue="false" :name="name" :picture="picture"/>
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

<style scoped>
.member {
    height: 100px;
}
</style>