<template>
  <div id="miniprogram">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    let isLogin = window.localStorage.getItem("username");
    if (!isLogin) {
      this.$router.push("/user/login");
    }
  }
};
</script>

<style scope>
#miniprogram {
  font-family: Helvetica, sans-serif;
}
</style>
