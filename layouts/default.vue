<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
    :show="displaySidenav"
    @close="displaySidenav = false"/>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import TheHeader from '~/components/Navigation/TheHeader.vue';
import TheSidenav from '~/components/Navigation/TheSidenav.vue';

@Component({
  components: {
    TheSidenav,
    TheHeader
  }
})
export default class Default extends Vue  {
  displaySidenav: boolean = false;
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
</style>
