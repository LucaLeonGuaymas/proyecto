<script setup>
import { onMounted } from 'vue'
import user from '../store/User.js'
import PostItem from '../components/PostItem.vue';
import { posts } from '../store/PostStore.js'
import NewPost from '../components/NewPost.vue';
import { getPosts } from '../firebase/posts.js';

onMounted(() => {
  getPosts()

})

</script>
<template>
  <main class="p-2 mt-5" id="comments">
    <NewPost v-if="user" />
    <div class="cardContainer">
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </main>
</template>
<style scoped>
#comments {

  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  background-size: cover;
  background-position: center;

}

#dropdown {
  min-height: auto;
}



.cardContainer{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>