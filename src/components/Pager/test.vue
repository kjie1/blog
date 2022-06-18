<template>
  <div class="app-container">
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./index.vue"
export default {
  components: {
    Pager,
  },
  data() {
    return {
      total: 302,
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log('1')
    },
  },
};
</script>

<style>
</style>