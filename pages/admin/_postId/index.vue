<template>

  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"></AdminPostForm>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import AdminPostForm from '~/components/Admin/AdminPostForm.vue';
@Component({
  layout: 'admin',
  components: {AdminPostForm}
})
export default class Index extends Vue{

  loadedPost = {
    author: 'Maximilian',
    title: 'My awesome Post',
    content: 'Super amazing, thanks for that!',
    thumbnailLink: 'https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg'
  }

}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
