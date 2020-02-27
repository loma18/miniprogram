<template>
  <div>
    <el-form :model="form" ref="form" label-width="80">
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
  </div>
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
    }
  }
};
</script>  