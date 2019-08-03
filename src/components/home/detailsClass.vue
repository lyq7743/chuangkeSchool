<template>
  <div class="content">
    <div class="header">
      <p><img class="imgleft" src="../../../static/img/i_back.png" alt=""></p>
      <p><img class="imgright" src="../../../static/img/is_bshare.png" alt=""></p>
    </div>
    <div class="classDetails">
      <p class="classLabel">精品课程</p>
      <p class="classtitle">{{shuju.classTitle}}</p>
      <p class='classIntroduce'>{{shuju.classIntroduction}}</p>
      <div class="classOverview">
        <ul>
          <li>
            <p>{{shuju.classNum}}</p>
            <p>课程小结</p>
          </li>
          <li>
            <p>{{shuju.classHour|setHout}}</p>
            <p>课程时长</p>
          </li>
          <li>
            <p>{{shuju.people}}</p>
            <p>学习人数</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="classServer">
      <ul>
        <li>服务</li>
        <li>
          <p><img src="../../../static/img/mipmap/ic_career_server1.png" alt=""><span>学前测试</span></p>
          <p><img src="../../../static/img/mipmap/ic_career_server2.png" alt=""><span>定制方案</span></p>
          <p><img src="../../../static/img/mipmap/ic_career_server3.png" alt=""><span>分层教学</span></p>
          <p><img src="../../../static/img/mipmap/ic_career_server4.png" alt=""><span>1V1教学答疑</span></p>
        </li>
        <li><img src="../../../static/img/ic_dot_more.png" alt=""></li>
      </ul>
    </div>
    <div class="classBody">


      <div class="teacher">
        <p class="teacher-title">主讲老师</p>
        <div class="teacher-Introduction">
          <div class="teacher-Introduction-top">
            <img :src="shuju.teacherImg" alt="">
            <div class="teacher-name">
              <p>{{shuju.teacherName}}</p>
              <p>{{shuju.teacherLevel}}</p>
            </div>
            <div class="teacher-welcome">
              <img src="../../../static/img/mipmap/flower_live.png" alt="">
              <p>{{shuju.studyPeople}}</p>
            </div>
          </div>
          <div class="teacher-Introduction-content">
            <p>
              {{shuju.teacherIntroduction}}
            </p>
          </div>
        </div>
      </div>
      <div class="classExperience">
        <div class="classExperience-top">
          <h1>高品质的学习体验</h1>
          <p>有趣、有效、只学有用的</p>
        </div>
        <div class="classExperience-content">
          <ul>
            <li>
              <img src="../../../static/img/vipDetail-advantage-img-1.png" alt="">
              <!-- <span></span> -->
              <div>
                <h2>专业教辅团队</h2>
                <h2>贴心学习服务</h2>
              </div>
            </li>
            <li>
              <img src="../../../static/img/vipDetail-advantage-img-2.png" alt="">
              <!-- <span></span> -->
              <div>
                <h2>专业教辅团队</h2>
                <h2>贴心学习服务</h2>
              </div>
            </li>
            <li>
              <img src="../../../static/img/vipDetail-advantage-img-3.png" alt="">
              <!-- <span></span> -->
              <div>
                <h2>专业教辅团队</h2>
                <h2>贴心学习服务</h2>
              </div>
            </li>
            <li>
              <img src="../../../static/img/vipDetail-advantage-img-4.png" alt="">
              <!-- <span></span> -->
              <div>
                <h2>专业教辅团队</h2>
                <h2>贴心学习服务</h2>
              </div>

            </li>

          </ul>
        </div>
      </div>
      <div class="classArrangements">
          <p class="classArrangements-title">课程安排</p>
          <ul v-for="(item,index) in shuju.kecheng" :key="index">
            <p class="classTitle">{{item.classTitle}}</p>
            <li v-for="(item,index) in item.classChapter" :key="index"><img src="../../../static/img/video_icon_play.png" alt=""><p>{{item.classtitle}}</p></li>
          </ul>
          <p class="seeMore">查看更多</p>
      </div>
      <div class="classTalk">
          <p class="classmateTalk">学员评价</p>
          <div class="classScoring">
              <ul>
                  <li class="scoringAll">{{shuju.fengshu}}</li>
                  <li><h4>课程内容</h4><p>5</p></li>
                  <li><h4>辅导老师</h4><p>5</p></li>
                  <li><h4>教学服务</h4><p>5</p></li>
              </ul>
          </div>
          <div class="classTalkAbout">
              <ul>
                 <li v-for="item in shuju.classtalk" key="index" >
                    <div class="talk-top">
                      <div class="scoring-left">
                        <img :src="item.user_img" alt="">
                        <p class="classmateName">{{item.user_name}}</p>
                      </div>
                      <div class="scoring-right">
                        <p><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""></p>
                        <p>{{item.time}}</p>
                      </div>
                    </div>
                    <div class="talk-content">
                      <p>{{item.talk}}</p>
                    </div>
                 </li>
                 <!-- <li>
                    <div class="talk-top">
                      <div class="scoring-left">
                        <img src="../../../static/img/mipmap/default_avatar_round.png" alt="">
                        <p class="classmateName">小明</p>
                      </div>
                      <div class="scoring-right">
                        <p><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""><img src="../../../static/img/icon_star_yelo.png" alt=""></p>
                        <p>07月25日</p>
                      </div>
                    </div>
                    <div class="talk-content">
                      <p>速度发货尽快释放很舒服是客服还是尽快发货看啥分行开设分行喀什饭卡是否士大夫手机开发和是否上课</p>
                    </div>
                 </li> -->
              </ul>
          </div>
      </div>
    </div>

    <div class="buyClass">
      <div class="buyClass-left">
        <p>免费</p>
        <p>已有212人报名</p>
      </div>
      <div class="buyClass-content">
        <img src="../../../static/img/ic_home_title_right.png" alt=""><span>咨询</span>
      </div>
      <div class="buyClass-right">
        <button>开始学习</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
          Plate:0,//判断是那个板块的数据
          classId : 0,//板块的第几个数据
          shuju:[]
      }
    },
    mounted(){
        this.$axios.get('../../../static/data/freeClass/freeClass.json')
        .then(res=>{
            console.log(res.data.class_list[this.Plate].list[this.classId].childList);
            this.shuju = res.data.class_list[this.Plate].list[this.classId].childList;

        })
    },
    filters:{
      setHout(val){
           return val +"H"
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    margin-top: 70/75rem;
    background-color: #f2f2f3;
    margin-bottom: 105/75rem;
    .header {
      z-index: 999;
      width: 100%;
      background: #fff;
      height: 70/75rem;
      // display: flex;
      // align-items: center;
      position: fixed;
      top: 0;
      background-color: #fff;

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .imgleft {
        left: 30/75rem;
        width: 15/75rem;
        height: 25/75rem;
      }

      .imgright {
        right:36/75rem;
        width: 36/75rem;
        height: 32/75rem;
      }
    }

    .classDetails {
      padding-top: 30/75rem;
      background-color: #fff;
      height: 400/75rem;

      .classLabel {
        margin: 0 36/75rem;
        font-size: 20/75rem;
        width: 118/75rem;
        height: 46/75rem;
        line-height: 46/75rem;
        text-align: center;
        color: white;
        border-radius: 50/75rem;
        background: #5494ff;

      }

      .classtitle {
        margin: 0 36/75rem;
        padding-top: 36/75rem;
        font-size: 38/75rem;
        font-weight: bold;
      }

      .classIntroduce {
        margin: 0 36/75rem;
        margin-top: 36/75rem;
        font-size: 21/75rem;
        color: #666666;
      }

      .classOverview {
        margin-top: 40/75rem;


        // background: #f9fcfe;
        ul {
          border-top: 1px solid #f5f5f5;
          border-bottom: 1px solid #f5f5f5;
          height: 116/75rem;
          margin: 0;
          display: flex;

          li {
            background: #f9fcfc;
            padding-top: 20/75rem;
            height: 116/75rem;
            line-height: 40/75rem;
            text-align: center;
            flex: 1;
            border-left: 1px solid #f2f2f2;

            p:first-child {
              font-weight: bold;
              font-size: 22/75rem;
            }

            p:last-child {
              color: #797c7e;
              font-size: 20/75rem;
            }
          }
        }
      }


    }

    .classServer {
      margin-top: 18/75rem;
      height: 140/75rem;
      background: #fff;

      ul {
        display: flex;
         // align-items: center;
        //
        li {
          line-height: 60/75rem;
          width: 106/75rem;
          &:first-child {
            font-size: 26/75rem;
            font-weight: bold;
            text-align: right;
          }

          &:nth-of-type(2) {
            display: flex;
            flex-wrap: wrap;
            width: 600/75rem;
            &>p {
              padding: 0 20/75rem;

              // line-height: 25/75rem;
              span {

                font-size: 22/75rem;
                line-height: 25/75rem;
              }
            }

            img {
              // width: 25/75rem;
              height: 25/75rem;
            }
          }

          &:last-child {
            text-align: center;

            img {
              width: 42/75rem;
            }
          }
        }
      }
    }

    .buyClass {
      // margin: 0 32/75rem;
      position: fixed;
      align-items: center;
      bottom: 0;
      z-index: 999;
      width: 100%;
      background: #fff;
      display: flex;
      height: 95/75rem;

      // position: relative;
      div {
        flex: auto;

      }

      .buyClass-left {
        margin-left: 32/75rem;

        p {
          &:first-child {
            font-size: 30/75rem;
            color: #dd5822;
          }

          &:last-child {
            font-size: 18/75rem;
            color: #ccc;
          }
        }
      }

      .buyClass-content {
        display: flex;
        align-items: center;

        span {}

        img {
          width: 40/75rem;
        }
      }

      .buyClass-right {
        text-align: right;

        button {
          // position: absolute;
          width: 200/75rem;
          height: 80/75rem;
          background: #63a3f6;
          border: none;
          border-radius: 50/75rem;
          color: white;
          margin-right: 40/75rem;
        }
      }
    }

    .classBody {
      margin-top: 20/75rem;


      background: #fff;

      .teacher {
        padding: 0 38/75rem;
        .teacher-title {
          font-weight: bold;
          font-size: 28/75rem;
          line-height: 100/75rem;
        }

        .teacher-Introduction {
          background: #f8fbfb;
          border-radius: 15/75rem;
          padding: 0 30/75rem;
          padding-top: 30/75rem;
          padding-bottom: 50/75rem;
          .teacher-Introduction-top {
            position: relative;
            display: flex;

            img {
              width: 102/75rem;
              height: 102/75rem;
              border-radius: 50%;

            }

            .teacher-name {
              height: 50/75rem;
              line-height: 50/75rem;
              padding-left: 20/75rem;
              p:first-child{
                  font-weight: 700;
                  font-size: 25/75rem;
              }
            }

            .teacher-welcome {
              position: absolute;
              right: 20/75rem;

              img {
                width: 20/75rem;
                height: 20/75rem;
              }

              p {
                position: absolute;
                right: -8/75rem;
                text-align: center;
                color: red;
              }
            }
          }

          .teacher-Introduction-content {
            margin-top: 10/75rem;

            p {
              font-size: 26/75rem;
              width: 640/75rem;
              line-height: 38/75rem;
            }


          }
        }
      }

      .classExperience {
        padding: 0 38/75rem;
        height: 1078/75rem;
        .classExperience-top{
          padding: 60/75rem 0;
          text-align: center;
          // height:230/75rem;
            h1{
              font-size:48/75rem;
            }
            p{
              font-size:34/75rem;
              color: gray;
            }
        }
        .classExperience-content{
            ul{
              display: flex;
              flex-wrap: wrap;
               box-sizing: border-box;
              li{
                position: relative;
                width:45%;
                box-sizing: border-box;
                margin:12.5/75rem;
                  // width:356/75rem;
                  height:347/75rem;
                  background:#f4f7f9;
                  text-align: center;
                  border-radius: 10/75rem;
                  img{
                    padding-top:72/75rem;
                    width: 89/75rem;

                    // height: 89/75rem;
                    padding-bottom:30/75rem;
                  }
                   h2{
                     font-size: 36/75rem;
                      width: 100%;
                   }
                   div{
                     transform: translateX(20%);
                     top:190/75rem;
                     position: absolute;
                   }

              }
            }
        }
      }
    }
    .classArrangements{
      .classArrangements-title{
        line-height: 100/75rem;
        background: #f9fcfc;
        padding-left: 44/75rem;
        font-weight: bold;
        font-size:25/75rem;
      }
      .seeMore{
        text-align: center;
         color: #5494ff;
         height: 80/75rem;
         line-height: 80/75rem;
      }
      ul{
        padding:0 38/75rem;
         .classTitle{
            font-weight:bold;
            padding-left:30/75rem;
            font-weight: bold;
            font-size:31/75rem;
            line-height: 80/75rem;
          }

        li{
          display: flex;
          line-height: 60/75rem;
          align-items: center;
          padding-left: 60/75rem;
            img{
              width: 25/75rem;
              height: 25/75rem;
              margin-right: 12/75rem;
            }
            p{
              font-size: 24/75rem;
              color: gray;
            }
        }
      }
    }
    .classTalk{
      .classmateTalk{
          font-size: 28/75rem;
          font-weight: bold;
          line-height: 70/75rem;
          padding-left: 40/75rem;
      }
      .classScoring{
        padding: 20/75rem 0;
        ul{
          display: flex;
          li{
            flex: auto;
            height: 80/75rem;
            font-size: 26/75rem;

            p{
              font-weight: bold;
            }
          }
          .scoringAll{
            font-size: 56/75rem;
            text-align: center;
            color: #f5a050;
            font-weight: bold;
          }
        }
      }
      .classTalkAbout{
        ul{
          padding: 0 38/75rem;
          li{
            padding:45/75rem 34/75rem 55/75rem 44/75rem;
            background:#f7fafa;
            position: relative;
            margin: 40/75rem 0;
            border-radius: 10/75rem;
            .talk-top{
                 margin-bottom: 30/75rem;
                .scoring-left{

                  display: flex;
                  align-items: center;
                  img{
                    widows: 68/75rem;
                    height: 68/75rem;
                  }
                  .classmateName{
                    padding-left:20/75rem;
                    font-size:30/75rem;
                    font-weight: bold;
                  }
                }
                .scoring-right{
                    position: absolute;
                    right: 34/75rem;
                    top: 45/75rem;
                    img{
                        width: 20/75rem;
                    }
                }
            }

          }
        }
      }
    }
  }
</style>
