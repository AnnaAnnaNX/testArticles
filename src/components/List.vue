<template>
  <div>
    <div>
      <h3>Список статей</h3>
      <div
        v-for="article in formattedList"
        :key="article.id"
      > {{ article.id }}
        <router-link :to="`/article/${article.id}`">{{ article.title }} {{ article.visited ? "(visited)" : "" }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
  },
  data () {
    return {
      list: [],
      title: '',
      body: '',
      viewedIds: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.list = json)
      try {
       this.viewedIds = JSON.parse(localStorage.getItem('ids')) || [];
      } catch (e) {
        //
      }
  },
  computed: {
    formattedList() {
      return this.list.map(article => ({...article, visited: this.viewedIds.includes(article.id)}))
    }
  },
  methods: {
    selectArticle: function (article) {
      this.title = article.title;
      this.body = article.body;
    }
  }
}
</script>

<style scoped>
</style>
