<template>
  <div class="details">
    <div class="course-details">
      <ul>
        <li>
          <p>164</p>
          <p>课程小节</p>
        </li>
        <li>
          <p>57H</p>
          <p>课程时长</p>
        </li>
        <li>
          <p>2297</p>
          <p>学习人数</p>
        </li>
      </ul>
    </div>

    <div class="teacher">
      <h2 class="teacher-title">主讲老师</h2>
      <div class="teacher-Details">
        <div class="divbox">
          <div class="img">
            <img src="../../../static/img/teacher.png" alt="" />
          </div>
          <div class="title">
            <h2>小美老师</h2>
            <p>金牌讲师</p>
          </div>

          <div class="game">
            <img src="../../../static/img/mipmap/f060.png" alt="" @click="gogame">
            <p>小游戏</p>
          </div>

          <div class="flower">
            <img src="../../../static/img/f092.png" alt="" />
            <p>848</p>
          </div>
        </div>

        <ul>
          <li>华清创客学院教学总监，美女讲师，人工智能工学硕士；</li>
          <li>嵌入式、物联网技术领域专家；</li>
          <li>ARM公司全球认证讲师；</li>
          <li>8年嵌入式开发及教育培训经验；</li>
          <li>参与编写过数十本专业图书；</li>
          <li>丰富的嵌入式人才培养经验，培养过上万名学生进入企业工作；</li>
          <li>授课风格轻松愉快，能够让学员学到扎实的理论和娴熟的技术，让学习不再是一件枯燥无味的事。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      gogame(){
        this.$router.push({'path':'/game'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .details {
    position: fixed;
    top: 23%;
    width: 100%;


    .course-details {
      width: 100%;
      text-align: center;
      margin: 70/64rem auto 0;
      align-items: center;
      line-height: 60/75rem;

      ul {
        display: flex;
        align-items: center;

        li {
          list-style: none;
          flex: 1;
          background-color: #f8fcff;
          border: 1px solid #e7ebef;
          height: 124/64rem;
        }
      }
    }
  }

  .teacher {
    width: 90%;
    margin: 0 auto;

    .teacher-title {
      line-height: 100/75rem;
    }

    .teacher-Details {
      width: 100%;

      .img {
        margin-top: 20/75rem;
        margin-left: 20/75rem;
      }

      .title {
        margin-top: 10/75rem;
        padding-left: 30/75rem;

        // margin-left: 22/64rem;
        h2 {
          padding-top: 20/75rem;
          width: 250/75rem;
          ;
        }

        p {
          color: #8f9495;
        }
      }
    }

    .divbox {
      position: relative;
      display: flex;
      width: 100%;
      // padding: 38/64rem;
      // line-height: 19/64rem;

      .img {
        width: 107/64rem;
        height: 107/64rem;

        img {
          width: 107/64rem;
          height: 107/64rem;
          border-radius: 50/64rem;
        }
      }

      .game {
        position:absolute;
        top:20/75rem;
        right: 105/75rem;
        img {
          width: 60/75rem;
        }
        p {
          color: #bd5932;
          font-size: 12/75rem;
          margin-top: -13/75rem;
        }
      }

      .flower {
        position: absolute;
        right: 20/75rem;
        top: 25/75rem;

        // margin-left: 280/64rem;
        img {
          width: 40/75rem;

        }

        p {
          color: #bd5932;
        }
      }
    }

    ul {
      padding: 38/64rem;
      color: #8f929e;

      li {
        list-style: none;
      }
    }
  }

  .teacher>div {
    width: 90%;
    background-color: #f8fcff;
  }
</style>
