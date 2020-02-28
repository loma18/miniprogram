<template>
  <el-form
    :model="form"
    ref="form"
    label-width="80px"
    :style="{width: '400px'}"
    label-position="top"
  >
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid, errorObj) => {
        if (!valid) {
          return;
        }
        this.$axios
          .post("/login", {
            uname: this.form.username,
            upwd: this.form.password
          })
          .then(res => {
            if (res.data && res.data.code === 200) {
              window.localStorage.setItem("username", this.form.username);
              this.$router.push("/");
            } else {
              this.$notify.error({
                title: "登录失败",
                message: res.data.msg
              });
            }
          });
      });
    },
    keyupEvt(e) {
      if (e.keyCode == 13) {
        this.submitForm("form");
      }
    }
  },
  mounted() {
    window.addEventListener("keyup", this.keyupEvt, false);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyupEvt, false);
  } //生命周期 - 销毁之前
};
</script>  
<style scope>
.el-form {
  margin: 300px auto;
}
.el-form button {
  width: 100%;
}
</style>