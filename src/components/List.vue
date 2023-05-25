<template>
  <div>
    <div class="list">
      <div
        v-for="article in list"
        :key="article.id"
      > {{ id }}
        <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
        <!-- <span class="link" @click="() => {selectArticle(article)}">{{ article.title }}</span> -->
    </div>
    </div>
    <Article
      :title="title"
      :body="body"
    ></Article>
  </div>
</template>

<script>
import Article from './Article.vue';

export default {
  name: 'List',
  components: {
    Article
  },
  props: {
  },
  data () {
    return {
      list: [],
      title: '',
      body: ''
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.list = json)
  },
  methods: {
    selectArticle: function (article) {
      console.log(article.id);
      this.title = article.title;
      this.body = article.body;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  max-height: 300px;
  overflow-y: scroll;
}
.link:hover {
  text-decoration: underline;
}
</style>
