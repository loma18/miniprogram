<template>
  <div id="miniprogram">
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
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>王小虎</span>
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
  </div>
</template>

<script>
import LeftMenu from "~/components/LeftMenu";
import Breadcrumb from "~/components/common/Breadcrumb";
export default {
  components: {
    "left-menu": LeftMenu,
    'breadcrumb': Breadcrumb
  },
  methods: {}
};
</script>

<style scoped>
#miniprogram {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-aside {
  width: 250px !important;
}
</style>
