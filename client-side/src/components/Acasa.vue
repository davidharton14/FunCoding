<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
      <v-layout row wrap justify-end>
        <v-btn>Acasa</v-btn>
        <v-btn @click="login()"> Client </v-btn>
        <v-btn @click="login()"> Restaurant </v-btn>
        <v-btn @click="contact()"> Contact </v-btn>
      </v-layout>
    </v-app-bar>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      hasAccount: true,
      loginData: new Object(),
      registerData: new Object(),
      users: [],
    };
  },
  mounted() {},
  methods: {
    login() {
      this.$router.push("/login");
    },
    contact() {
      this.$router.push("/contact");
    },
  },
};
</script>
<style scoped>
h2 {
  color: white;
}
</style>
