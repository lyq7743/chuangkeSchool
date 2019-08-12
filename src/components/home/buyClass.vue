<template>
  <div class="content">
    <div class="header">
    	<p><img class="imgleft" src="../../../static/img/i_back.png" alt="" ></p>
    	<p class="title">开通课程</p>
    </div>

    <div class="classContent">
      <p class="classTitle">课程信息</p>
      <div>
        <img src="http://static.makeru.com.cn/upload/mavendemo/course/20181101/1541042617074685837.jpg" alt="">
        <div>
          <p class="className">大士大夫士大夫是否</p>
          <p class="classPrice">4654</p>
        </div>
      </div>

    </div>
    <div class="banji">
      <p>选择班型</p>
      <p>VIP课程 <span>￥4300</span><del>￥8500</del></p>
      <input type="checkbox">
    </div>
    <div class="footer">
      <div class="yue">
        <p>余额：0(余额不足)</p>
      </div>
      <div class="buy">
          <p>实付：$4300</p>
          <button>购买</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }

  }
</script>

<style lang="less" scoped>
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
      .title{
        font-weight: bold;
        font-size: 28/75rem;
        height: 70/75rem;
        text-align: center;
        line-height: 70/75rem;
      }

		}
    .classContent{
      margin-top: 70/75rem;
      .classTitle{
        font-size: 30/75rem;
          height: 60/75rem;
          line-height: 60/75rem;
          padding-left: 20/75rem;
          border-bottom: 1px solid #ccc;

      }
      img{

        width:180/75rem;
        height: 125/75rem;
      }
      &>div{
         padding: 20/75rem;
        display: flex;
        &>div{
            p{
              margin-left: 20/75rem;
              padding: 10/75rem 0;
            }
            .classPrice{
              color: red;
            }
        }
      }
    }

</style>
