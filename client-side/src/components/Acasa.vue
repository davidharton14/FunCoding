<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
      <v-layout row wrap justify-end>
        <v-tabs center-active background-color="green accent-4">
          <v-tab center-active>Acasa</v-tab>
          <v-tab @click="login()"> Client </v-tab>
          <v-tab @click="login()"> Restaurant </v-tab>
          <v-tab @click="contact()"> Contact </v-tab>
        </v-tabs>
      </v-layout>
    </v-app-bar>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
