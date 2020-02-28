<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item,index) in pathList"
        :key="item.key"
        :to="(index ===pathList.length-1?'': item.path)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { menus } from "~/constants/menus";
export default {
  data() {
    return {
      pathList: [],
      show: false
    };
  },
  methods: {
    getData() {
      let list = this.$router.history.current.path
        .replace(/(^\/|\/$)/g, "")
        .split("/");
      let resultList = this.setPathList(list, menus);
      this.pathList = resultList;
    },
    setPathList(list, menuList) {
      let resultList = [];
      for (let i = 0, len = list.length; i < len; i++) {
        for (let j = 0, len1 = menuList.length; j < len1; j++) {
          if (list[i] == menuList[j].key) {
            resultList.push({
              key: menuList[j].key,
              icon: menuList[j].icon,
              path: menuList[j].path,
              title: menuList[j].title
            });
            list.splice(i, 1);
            if (list.length > 0) {
              resultList = resultList.concat(
                this.setPathList(list, menuList[j].children)
              );
            } else {
              return resultList;
            }
          }
        }
      }
      return resultList;
    }
  },
  watch: {
    $route(to, from) {
      this.getData();
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>