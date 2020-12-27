<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PostList from '~/components/Posts/PostList.vue';
import {Post} from '~/classes/Post';
import {Context} from '@nuxt/types';

@Component({
  components: {
    PostList
  }
})
export default class Index extends Vue{
  get loadedPosts() {
    return this.$store.getters.loadedPosts;
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
