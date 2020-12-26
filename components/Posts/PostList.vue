<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg"
      title="Hello there!"
      preview-text="This my first Post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg"
      title="Hello there!"
      preview-text="This my second Post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg"
      title="Hello there!"
      preview-text="This my third Post!"
    />
  </section>

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import PostPreview from '~/components/Posts/PostPreview.vue';

@Component({
  components: {
    PostPreview
  }
})
export default class Index extends Vue{
  @Prop({default: false})
  isAdmin!: Boolean

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
