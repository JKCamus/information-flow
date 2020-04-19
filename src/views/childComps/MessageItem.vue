<template>
  <div class="list-item">
    <div class="item-img">
      <img :src="messageItem.img" alt="messageImg">
    </div>
    <div class="item-info">
      <div class="item-title">{{messageItem.title}}</div>
      <div class="item-desc">{{messageItem.desc}}</div>
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
  .list-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-title,
  .item-desc {
    overflow: hidden;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
    display: -webkit-box;
  }

  .item-title {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info,
  .item-desc {
    color: #666;
    font-size: 14px;
  }

  .item-desc {
    margin-top: 15px;
  }
</style>