
<template>
  <div id="app">
    <div class="header">
      <div class="title">anima</div>
      <div class="navigator">
        <ul class="nav-list">
          <li v-for="(item, index) in tabList" :key="index"
            @click="switchTab(index)" :class="{active: currentPage === index}">
            {{ item }}
          </li>
        </ul>
        <div class="triangle-up" :class="{left: currentPage === 0, second:currentPage ===1,third:currentPage === 2,right: currentPage === 3}"></div>
      </div>
    </div>
    <div class="content">
      <cube-slide
        :data="tabList"
        :initialIndex="currentPage"
        :loop="false"
        :autoPlay="false"
        :threshold="0.1"
        @change="slideChange">
        <cube-slide-item v-for="(item, index) in tabList" :key="index">
          <div class="match-list-wrapper">
            <match-list :type="index"></match-list>
          </div>
        </cube-slide-item>
        <div slot="dots"></div>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import MatchList from './components/match-list'

export default {
  name: 'app',
  data () {
    return {
      currentPage: 0,
      tabList: ['已完结', '更新中', '剧场版','ova']
    }
  },
  components: {
    MatchList
  },
  methods: {
    switchTab (index) {
      this.currentPage = index
    },
    slideChange (index) {
      this.currentPage = index
    }
  }
}
</script>

<style lang="stylus">
html, body, #app
  height: 100%
  text-align: center
#app
  background-color: #E0E4E8
  .header
    color: white
    background-color: #15191D
    .title
      padding: 20px 0
      font-size: 16px
      color: white
    .navigator
      position: relative
      padding-bottom: 12px
      font-size: 12px
      .nav-list
        display: flex
        justify-content: space-around
        li
          width: 60px
          color: #636873
          &.active
            color: white
    .triangle-up
      position: absolute
      left: 50%
      transform: translate(-50%, 0)
      bottom: 0
      width: 0
      height: 0
      border-left: 7px solid transparent
      border-right: 7px solid transparent
      border-bottom: 8px solid #E0E4E8
      transition: all 0.4s
      &.left
        left: 12.67%
      &.second
       	left:36.67%
      &.third
        left:62.67%
      &.right
        left: 87.34%
        
  .content
    height: calc(100% - 80px)
    overflow: hidden
    .match-list-wrapper
      height: 100%
  
</style>