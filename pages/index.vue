<template>
  <div id="example-1">
    <button @click="fetch_1">get_data</button>
    <div v-if="info">{{ info.id }}</div>
  </div>
</template>

<script>
export default {
  name: 'example-1',
  data: () => ({
    info: null
  }),
  methods: {
    async fetch_1 () {
      const { data } = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1');
      this.info = data;
    }
  }
}
</script>
