<template>
  <div>
    <div>
      <router-link to="/">Назад</router-link>
    </div>
    {{ id }}
    <h3>{{ article.title }}</h3>
    <p>{{ article.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: String,
    body: String
  },
  data () {
    return {
      id: this.$route.params.id,
      article: {}
    }
  },
  mounted() {
    if (this.id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => response.json())
        .then(json => this.article = json)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
