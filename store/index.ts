import Vuex from 'vuex'
import {Post} from '~/classes/Post';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const post1: Post = new Post('1', 'First Post', 'This is our first post!', 'https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg');
            const post2: Post = new Post('2', 'Second Post', 'This is our second post!', 'https://www.humantrust.co.jp/wp-content/uploads/2019/03/047e142d419cf76ebd8218ce53d73a3b-1.jpg');

            vuexContext.commit('setPosts', [post1, post2]);
            resolve();
          },1000);
        })
          .then((data: any) => {
            context.store.commit('setPosts', data.loadedPosts);
          })
          .catch(e => {
            context.error(e)
          })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  });
}

export default createStore;
