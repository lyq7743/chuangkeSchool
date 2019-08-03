<template>
  <div class="directory">
    <div class="curriculum">
      <h3>课程安排</h3>
      <div class="chapter">
        <h3>第1张 必备Linux命令和c语言基础</h3>
        <ul>
          <li>
            <a href="#">1.1 环境安装</a>
          </li>
          <li>
            <a href="#">1.2 文件和目录相关命令一</a>
          </li>
          <li>
            <a href="#">1.3 文件和目录相关命令二</a>
          </li>
          <li>
            <a href="#">1.4 vi编辑器的使用一</a>
          </li>
          <li>
            <a href="#">1.5 vi编辑器的使用二</a>
          </li>
          <li>
            <a href="#">1.6 基础知识</a>
          </li>
          <li>
            <a href="#">1.7 数据的表示</a>
          </li>
          <li>
            <a href="#">1.8 程序的调试和编译</a>
          </li>
        </ul>
      </div>

      <div class="chapter">
        <h3>第2张 数据类型、常量、变量及运算符</h3>
        <ul>
          <li>
            <a href="#">2.1 环境安装</a>
          </li>
          <li>
            <a href="#">2.2 文件和目录相关命令一</a>
          </li>
          <li>
            <a href="#">2.3 文件和目录相关命令二</a>
          </li>
          <li>
            <a href="#">2.4 vi编辑器的使用一</a>
          </li>
          <li>
            <a href="#">2.5 vi编辑器的使用二</a>
          </li>
          <li>
            <a href="#">2.6 基础知识</a>
          </li>
          <li>
            <a href="#">2.7 数据的表示</a>
          </li>
          <li>
            <a href="#">2.8 程序的调试和编译</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">

  .directory{
    position: fixed;
    top: 40%;
    width: 90%;
  }

  .curriculum{
      width: 90%;
      margin: 0 auto;
      background-color: #f9fdfc;
      .chapter{
          margin-left: 20/64rem;
      }
      ul{
          margin-left: 40/64rem;
          li:nth-child(1) a{
              color: #000000;
          }
          li:nth-child(1) a:before{
              display: block;
              content: '';
              width: 42/64rem;
              height: 42/64rem;
              position: absolute;
              top: 20/64rem;
              right: 0;
          }
          li:nth-child(2) a:before{
              display: block;
              content: '';
              width: 42/64rem;
              height: 42/64rem;
              position: absolute;
              top: 20/64rem;
              right: 0;
          }
          li:nth-child(2) a{
              color: #000000;
          }
          li{
              list-style: none;
              line-height: 80/64rem;
              border-bottom: 1px solid #dfe1e0;
              position: relative;
              a{
                  text-decoration: none;
                  color: #6d6f6f;
                  margin-left: 60/64rem;
              }
              &:before{
                  display: block;
                  content: '';
                  width: 42/64rem;
                  height: 42/64rem;
                  position: absolute;
                  top: 20/64rem;
                  left: 0;
              }
          }
      }
  }
</style>
