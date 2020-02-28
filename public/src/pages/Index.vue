<template>
  <el-container>
    <el-aside>
      <left-menu></left-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-row :gutter="20" justify="space-around">
          <el-col :span="12">
            <breadcrumb></breadcrumb>
          </el-col>
          <el-col :span="6">
            <el-dropdown @command="handleCommand">
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{username}}</span>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "~/components/LeftMenu";
import Breadcrumb from "~/components/common/Breadcrumb";
export default {
  data() {
    return {
      username: window.localStorage.getItem("username")
    };
  },
  components: {
    "left-menu": LeftMenu,
    breadcrumb: Breadcrumb
  },
  methods: {
      handleCommand(cmd){
          if(cmd == 'logout'){
              window.localStorage.removeItem('username');
              this.$router.push('/user/login');
          }
      }
  }
};
</script>

<style scoped>
.el-aside {
  width: 250px !important;
}
</style>
