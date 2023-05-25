<template>
  <div>
    <div>
      <h3>Список статей</h3>
      <div
        v-for="article in list"
        :key="article.id"
      > {{ article.id }}
        <router-link :to="`/article/${article.id}`">{{ article.title }} {{ viewedIds.includes(article.id) ? "(visited)" : " " }}</router-link>
        <!-- <span class="link" @click="() => {selectArticle(article)}">{{ article.title }}</span> -->
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
</style>
