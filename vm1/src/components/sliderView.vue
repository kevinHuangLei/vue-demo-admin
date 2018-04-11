<template>
    <div class=''>
      <el-col :span="4">
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router="true">
          <el-menu-item index="/">
              <i class="el-icon-location"></i>
              <span slot="title">Etnet首页</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title" index="">
              <i class="el-icon-view"></i>
              <span slot="title">新闻管理</span>
            </template>
            <el-menu-item index="/bigBankReportDetail">大行报告</el-menu-item>
          </el-submenu>
          <el-submenu>
            <template slot="title" index="">
              <i class="el-icon-menu"></i>
              <span slot="title">专栏管理</span>
            </template>
            <el-menu-item index="/two">推荐阅读</el-menu-item>
            <el-menu-item index="">内容管理</el-menu-item>
            <el-menu-item index="">栏目管理</el-menu-item>
            <el-menu-item index="">布局管理</el-menu-item>
            <el-menu-item index="">作者管理</el-menu-item>
            <el-menu-item index="">贴士管理</el-menu-item>
            <el-menu-item index="">基金管理</el-menu-item>
          </el-submenu>
          <el-submenu index="">
            <template slot="title" index="">
              <i class="el-icon-setting"></i>
              <span slot="title">系统管理</span>
            </template>
            <el-menu-item index="5-1">用户管理</el-menu-item>
            <el-menu-item index="5-2">角色管理</el-menu-item>
            <el-menu-item index="5-3">公众号管理</el-menu-item>
          </el-submenu>
          <el-submenu index="">
            <template slot="title" index="">
              <i class="el-icon-star-on"></i>
              <span slot="title">广告管理</span>
            </template>
            <el-menu-item index="5-1">用户管理</el-menu-item>
            <el-menu-item index="5-2">角色管理</el-menu-item>
            <el-menu-item index="5-3">公众号管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
</template>

<script>
    export default {
        name: 'sliderView',
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style>

</style>
