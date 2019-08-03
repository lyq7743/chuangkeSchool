<template>
  <div class="ask">
    <div class="commentslist">
      <div class="commentsimg">
        <img src="../../../static/img/login_icon_photo.png" alt="" />
        <p>网络黑客</p>
      </div>
      <div class="evaluation">
        <div class="star">
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
        </div>
        <p>07月01日</p>
      </div>
      <p>辅导老师的技术能力深不可测，基本每次都能及时回答学院问题，而且讲解的详细到位，</p>
    </div>

    <div class="commentslist">
      <div class="commentsimg">
        <img src="../../../static/img/login_icon_photo.png" alt="" />
        <p>MAKERU175078123</p>
      </div>
      <div class="evaluation">
        <div class="star">
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
        </div>
        <p>06月26日</p>
      </div>
      <p>视频质量清晰，老师讲解的内容也很受用。对于工作中需要熟练掌握的知识，老师基本都会重点详细讲解。由于体系内容庞大，很多细节知识需要自己去完善与弥补。</p>
    </div>

    <div class="commentslist">
      <div class="commentsimg">
        <img src="../../../static/img/login_icon_photo.png" alt="" />
        <p>joker</p>
      </div>
      <div class="evaluation">
        <div class="star">
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
          <img src="../../../static/img//icon_star_yelo.png" alt="" />
        </div>
        <p>06月26日</p>
      </div>
      <p>技术能力肯定很好，讲课的逻辑和思路也是不很好的，尤其是韩老师讲课水平还是没得说的，非常不错，建议以后的学习群可以多主动或者定期和学院交流一下，会更好</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
  .ask{
    position: fixed;
    top: 40%;
    width: 90%;
  }
  .commentstitle {
    display: flex;
    margin: 50/64rem 0 0 0;

    .num {
      color: #f79e31;
      font-size: 55/64rem;
    }
  }4

  .commentslist {
    display: flex;
    flex-wrap: wrap;
    margin: 50/64rem 0 0 0;
    background-color: #f8fafc;
    padding: 30/64rem;
    border-radius: 10/64rem;

    .commentsimg {
      display: flex;

      img {
        width: 80/64rem;
        height: 80/64rem;
        margin-left: 30/64rem;
      }

      p {
        margin-left: 40/64rem;
        font-weight: bold;
        font-size: 25/64rem;
      }
    }

    .evaluation {
      text-align: right;

      p {
        color: #9b9b9e;
      }
    }
  }

  .commentslist>div {
    flex: 1;
  }

  .commentstitle>div {
    flex: 1;
    height: 100/64rem;
    text-align: center;
  }
</style>
