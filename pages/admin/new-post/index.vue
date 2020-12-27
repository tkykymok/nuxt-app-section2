<template>

  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>

</template>

<script lang="ts">
import axios from 'axios';
import {Component, Vue} from 'nuxt-property-decorator';
import AdminPostForm from '~/components/Admin/AdminPostForm.vue';

@Component({
  layout: 'admin',
  components: {
    AdminPostForm
  }
})
export default class Index extends Vue {
  onSubmitted(postData: any) {
    axios.post('https://nuxt-blog-cd47a-default-rtdb.firebaseio.com/posts.json', postData)
      .then(result => console.log(result))
      .catch(e => console.log(e));
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
