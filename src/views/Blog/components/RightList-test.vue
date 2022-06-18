<template>
  <div>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: false,
          children: [
            { name: "a-1", isSelect: false },
            {
              name: "a-2",
              isSelect: true,
              children: [
                { name: "a-1-1", isSelect: false },
                { name: "a-1-2", isSelect: false },
                { name: "a-1-3", isSelect: false },
                { name: "a-1-4", isSelect: false },
              ],
            },
            { name: "a-3", isSelect: false },
          ],
        },
        { name: "c", isSelect: false },
        { name: "d", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>