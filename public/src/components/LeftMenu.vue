<template>
  <el-menu
    class="leftMenu"
    @select="handleClick"
    :default-openeds="defaultOpens"
    :default-active="defaultActive"
  >
    <template v-for="items in menus">
      <el-submenu v-if="items.children.length>0" :key="items.key" :index="items.key">
        <template slot="title">
          <i :class="'el-icon-'+items.icon"></i>
          {{items.title}}
        </template>
        <el-menu-item v-for="item in items.children" :key="item.key" :index="item.key">
          <i :class="'el-icon-' + item.icon"></i>
          {{item.title}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="items.key" :index="items.key">
        <i :class="'el-icon-' + items.icon"></i>
        <span slot="title">{{items.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>    

<script>
import { menus } from "~/constants/menus";
export default {
  data() {
    let pathArr = this.getPath();
    return {
      menus,
      defaultOpens: pathArr,
      defaultActive: pathArr[pathArr.length - 1]
    };
  },
  methods: {
    handleClick(index, indexPath) {
      let path = indexPath.join("/");
      let currentPath = this.$router.history.current.path.replace(
        /(^\/|\/$)/g,
        ""
      );
      if (path == currentPath) {
        return;
      }
      this.$router.push("/admin/" + path);
    },
    getPath() {
      let path = this.$router.history.current.path.replace(/(^\/|\/$)/g, ""),
        pathArr = path.split("/");
      return pathArr;
    }
  },
  watch: {
    $route(to, from) {
      let pathArr = this.getPath();
      this.defaultOpens = pathArr;
      this.defaultActive = pathArr[pathArr.length - 1];
    }
  }
};
</script>
<style scoped>
ul.leftMenu li {
  text-align: left;
}
</style>