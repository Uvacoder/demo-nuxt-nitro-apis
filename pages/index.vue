<template>
  <div class="container">
     <h2>/api/post</h2>
    <pre>{{ post }}</pre>

    <br>

    <h2>/api/posts</h2>
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      posts: [],
    }
  },
  async created() {
    this.post = await $fetch('/api/post')
    this.posts = await $fetch('/api/posts')
  }
}
</script>
