<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on XXX</div>
        <div class="post-detail">Written by NAME</div>
      </div>
      <p class="post-content">Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awewome-domain.com">feedback@my-awewome-domain.com</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'nuxt-property-decorator';
import {Context} from '@nuxt/types';
import {Post} from '~/classes/Post';

@Component({})
export default class Index extends Vue {
  asyncData(context: Context, callback: any) {
    const post1: Post = new Post('1', 'First Post (ID: ' + context.route.params.id + ')', 'This is our first post!', 'https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg');
    setTimeout(() => {
      callback(null, {
        loadedPost : post1
      });
    }, 1000);
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
