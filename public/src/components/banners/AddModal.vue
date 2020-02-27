<template>
  <div>
    <el-dialog title="收货地址" :visible="visible" @close="$emit('handleCancel')">
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item label="自定义类型">
          <el-input v-model="form.customType"></el-input>
        </el-form-item>
        <el-form-item label="业务编号">
          <el-input v-model="form.busNo"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接地址">
          <el-input v-model="form.linkUrl"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="显示" :value="1"></el-option>
            <el-option label="隐藏" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.order"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="$emit('handleCancel')">取消</el-button>
          <el-button type="primary" @click="handleOk">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["visible", "itemData"],
  data() {
    return {
      //   visible1: this.visible,
      form: {
        customType: "",
        busNo: "",
        name: "",
        linkUrl: "",
        remark: "",
        status: 1,
        order: ""
      }
    };
  },
  methods: {
    handleOk() {
      this.$refs.form.validate((valid, field) => {
        if (!valid) {
          return;
        }
        this.$emit('handleOk',this.$refs.form.model)
        this.form = {};
      });
    }
  }
};
</script>

<style scope>
.el-form-item .el-form-item__content {
  text-align: left;
}
</style>