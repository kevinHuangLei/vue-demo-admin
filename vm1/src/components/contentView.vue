<template>
  <div>
    <header-view></header-view>
    <el-row>
      <slider-view></slider-view>
      <el-col :span="20">
        <main-view></main-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headerView from './headerView.vue'
import sliderView from './sliderView.vue'
import mainView from './mainView.vue'
    export default {
      name: 'contentView',
      components: {
        headerView,
        sliderView,
        mainView
      }
    }
</script>

<style>

</style>
