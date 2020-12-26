<template>
  <div class="posts-page">
    <PostList/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PostList from '~/components/Posts/PostList.vue';

@Component({
  components: {
    PostList
  }
})
export default class Index extends Vue{

}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
