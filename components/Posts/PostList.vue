<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview-text="post.previewText"
    />
  </section>

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import PostPreview from '~/components/Posts/PostPreview.vue';
import {Post} from '~/classes/Post';

@Component({
  components: {
    PostPreview
  }
})
export default class Index extends Vue{
  @Prop({default: false})
  isAdmin!: Boolean
  @Prop({required: true})
  posts!: Array<Post>

}
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
