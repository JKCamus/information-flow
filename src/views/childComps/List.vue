<template>
  <div class="list">


    <message-item v-for="item in showMessage" :message-item="item"></message-item>

  </div>
</template>
<script>
  import MessageItem from 'views/childComps/MessageItem'

  export default {
    name: "List",
    components: {
      MessageItem
    },
    computed: {

    },
    props:{
      showMessage:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped>

</style>