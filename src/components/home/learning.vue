<template>
  <div class="Learning">

    <div class="video-wrap" style="width:100%;float:left;oveflow:hidden;">
      <iframe :src="this.activeVideo.youtobeURL" frameborder='0' allow='autoplay;encrypted-media' allowfullscreen style='width:100%;height:500px;'>
      </iframe>
      <div style="height:50%;width:100%;position:absolute;z-index:999" @click="activeVideoShow(video.id)"></div>
    </div>


      <div class="learining-bottom">
        <ul>
          <li>
            <router-link to='/home/details'>详情</router-link>
          </li>
          <li>
            <router-link to='/home/directory'>目录</router-link>
          </li>
          <li>
            <router-link to='/home/ask'>提问</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: false,
        activeVideo: {
          id: 3,
          title: 'test1',
          speaker: 'harry',
          likes: 0,
          views: 0,
          describe: 'good',
          youtobeURL: 'http://player.youku.com/embed/XMzcwNTY3NTM2MA'
        }
      }
    },
    methods: {
      activeVideoShow(id) {
        this.videos.filter(item => {
          if (id == item.id) {
            this.activeVideo = item
          }
        })
      }
    }
  }
</script>


<style lang="less">
  .learining-bottom {
    position: fixed;
    top: 40%;
    width: 100%;
    margin: 10/64rem auto;
    ul {
      display: flex;
      li {
        flex: auto;
        text-align: center;
        font-size: 28/64rem;
        font-weight: bold;
        line-height: 84/64rem;
        color: shybule;
      }
    }
  }
</style>
