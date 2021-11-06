<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
      <v-layout row wrap justify-end>
        <v-tabs center-active background-color="green accent-4">
          <v-tab @click="acasa()">Acasa</v-tab>
          <v-tab @click="login()"> Client </v-tab>
          <v-tab @click="loginRestaurant()"> Restaurant </v-tab>
          <v-tab @click="contact()"> Contact </v-tab>
        </v-tabs>
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
      tab: null,
      items: [
        { tab: "One", content: "Tab 1 Content" },
        { tab: "Two", content: "Tab 2 Content" },
        { tab: "Three", content: "Tab 3 Content" },
      ],
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
    loginRestaurant() {
      this.$router.push("/login_restaurant");
    },
    acasa() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
h2 {
  color: white;
}
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
