<template>
  <div>
    <p>
      <el-button @click="handleClick('add')">添加</el-button>
    </p>
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="item in bannerCol"
        :key="item.label"
        :prop="item.label"
        :label="item.title"
        :width="item.width?item.width:180"
      ></el-table-column>
    </el-table>
    <add-modal :visible="visible" :itemData="itemData" @handleCancel="handleCancel" @handleOk="handleOk"></add-modal>
  </div>
</template>
<script>
import AddModal from "~/components/banners/AddModal";
import { bannerCol } from "~/constants/columns";
export default {
  data() {
    return {
      type: "add",
      visible: false,
      itemData: [],
      bannerCol,
      tableData: [
        {
          noType: "new",
          business: "123456",
          name: "启动图",
          icon: "",
          status: 1,
          businessID: "1",
          src: "https://loma18.com",
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    "add-modal": AddModal
  },
  methods: {
    handleClick(type, itemData = []) {
      this.type = type;
      this.visible = true;
      if (type == "edit") {
        this.itemData = itemData;
      }
    },
    handleCancel() {
      this.visible = false;
      this.itemData = [];
    },
    handleOk(value){
        this.tableData.push(value);
        this.handleCancel();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>