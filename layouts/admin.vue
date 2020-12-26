<template>
  <div>
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

}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
</style>
