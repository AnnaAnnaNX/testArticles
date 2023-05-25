<template>
  <div>
    <div>
      <router-link to="/">Назад</router-link>
    </div>
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
      id: parseInt(this.$route.params.id),
      article: {}
    }
  },
  mounted() {
    if (this.id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => response.json())
        .then(json => this.article = json)
      try {
        const ids = JSON.parse(localStorage.getItem('ids')) || [];
        if (!ids.includes(this.id)) {
          localStorage.setItem('ids', JSON.stringify([...ids, this.id]))
        }
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
  }
}
</script>

<style scoped>
</style>
