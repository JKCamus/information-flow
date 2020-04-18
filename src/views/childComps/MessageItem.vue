<template>
  <div class="list-item">
 
      1212312
      {{messageItem.id}}
    </div>
  </div>
</template>
<script>
  export default {
    name: "ListItem",
    components: {

    },
    props: {
      messageItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {

    }
  }
</script>
<style scoped>

</style>