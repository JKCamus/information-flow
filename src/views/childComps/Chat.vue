<template>
  <div class="container" path="/detail">
    <scroll class="content" ref="scroll">

      <chat-dialog :dialogData="dialogData"></chat-dialog>
    </scroll>

    <div class="chat-footer">
      <van-uploader class="footer-left" :after-read="onRead2">
        <van-icon class="left-emoji" name="photo-o" size="30px" color="#1084ff" />
      </van-uploader>
      <div class="footer-center">
        <input class="center-input" type="text" placeholder="Say something..." v-model="inputValue">
      </div>
      <div class="footer-right" @click="onSendChat">
        <div class="right-button">
          发送
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import {
    NavBar,
    Icon,
    Toast
  } from "vant"
  import ChatDialog from "./ChatDialog"
  import utils from "common/index.js"
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name: 'Chat',
    components: {
      NavBar,
      Icon,
      Toast,
      ChatDialog,
      Scroll
    },
    data() {
      return {
        inputValue: '',
        clientHeight: document.documentElement.clientHeight,
        dialogData: [{
            id: 0,
            type: 1,
            text: 'hello',
            time: '17:00',
          },
          {
            id: 1,
            type: 1,
            text: '我是一只喵~',
            time: '17:01'
          },
              {
            id: 2,
            type: 1,
            text: 'Nice to see you',
            time: '17:08'
          }
        ],
        src: '',
      }
    },
    computed: {

    },
    methods: {
      /* 发送信息 */
      onSendChat() {
        if (this.inputValue == '') {
          Toast('发送了一个寂寞~')
        } else {
          let chatContent = {
            type: 2,
            text: this.inputValue,
            time: utils.getNowTime(),
            src: this.src
          }
          this.dialogData.push(chatContent)
          this.inputValue = ''
        }
        this.$refs.scroll.refresh()
      },
      /* 读取文件并发送 */
      onRead2(file) {
        let _this = this;
        let content = file.file
        // console.log(content);
        let reader = new FileReader();
        reader.readAsDataURL(content); // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          // console.log(this.result);
          _this.src = this.result;

          let chatContent = {
            type: 2,
            text: '',
            time: utils.getNowTime(),
            src: _this.src
          }
          _this.dialogData.push(chatContent)
          _this.src = ''
        }
        // console.log(chatContent);
        // console.log(this);
        this.$refs.scroll.refresh()
      }
    },

  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    /* height: 400px; */
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  .container>>>.van-nav-bar__text {
    color: #FFFFFF;
  }

  .container>>>.van-icon-arrow-left:before {
    color: #FFFFFF;
  }

  .container>>>.van-nav-bar .van-icon {
    color: #FFFFFF;
  }

  .chat-footer {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #E5E4E4;
    background-color: #FFFFFF;
  }

  .footer-left {
    width: 60px;
    height: 60px;
    border-right: 1px solid #E5E4E4;
  }

  .left-emoji {
    margin-left: 15px;
    margin-top: 15px;
    /* background-color: #1084ff; */
    color: #1084ff;
  }

  .footer-center {
    height: 60px;
    width: 230px;
  }

  .center-input {
    box-sizing: border-box;
    padding: 0 5px;
    border: none;
    border-bottom: 1px solid #1084ff;
    width: 200px;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    background-color: #fff;
  }

  .footer-right {
    height: 60px;
  }

  .right-button {
    margin-top: 14px;
    margin-left: 5px;
    width: 60px;
    height: 36px;
    background-color: #1084ff;
    color: #FFFFFF;
    text-align: center;
    line-height: 36px;
    border-radius: 2px;
  }
</style>