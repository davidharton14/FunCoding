<template>
  <v-layout row wrap justify-center align-center class="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
      <v-layout row wrap justify-end>
        <v-tabs center-active background-color="green accent-4">
          <v-tab>Acasa</v-tab>
          <v-tab @click="login()"> Client </v-tab>
          <v-tab @click="login()"> Restaurant </v-tab>
          <v-tab @click="contact()"> Contact </v-tab>
        </v-tabs>
      </v-layout>
    </v-app-bar>
    <v-layout
      row
      wrap
      justify-center
      align-center
      class="main"
      v-if="hasAccount"
    >
      <v-card color="white">
        <v-card-title primary-title>
          <h2 class="white-text">Log in</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Email"
            type="email"
            v-model="loginData.email"
          ></v-text-field>
          <v-text-field
            label="Parola"
            type="password"
            v-model="loginData.parola"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap justify-center>
            <v-btn color="green accent-4" @click="login()">Log in</v-btn>
            <v-btn color="amber" @click="hasAccount = false">Register</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-layout row wrap justify-center align-center class="main" v-else>
      <v-card color="white">
        <v-card-title primary-title>
          <h2 class="white-text">Register</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Nume"
            type="nume"
            v-model="registerData.nume"
          ></v-text-field>
          <v-text-field
            label="Prenume"
            type="prenume"
            v-model="registerData.prenume"
          ></v-text-field>
          <v-text-field
            label="Email"
            type="email"
            v-model="registerData.email"
          ></v-text-field>
          <v-text-field
            label="Telefon"
            type="telefon"
            v-model="registerData.telefon"
          ></v-text-field>
          <v-text-field
            label="Parola"
            type="password"
            v-model="registerData.parola"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap justify-center>
            <v-btn color="green accent-4" @click="hasAccount = true"
              >Log in</v-btn
            >
            <v-btn color="amber" @click="register()">Register</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hasAccount: true,
      loginData: new Object(),
      registerData: new Object(),
    };
  },
  methods: {
    login() {
      let data = {
        email: this.loginData.email,
        parola: this.loginData.password,
      };
      axios
        .post("http://localhost:8080/api/login", data)
        .then((res) => {
          console.log("asd");
          let user = res.data.user;
          if (user != null) {
            localStorage.setItem("client", JSON.stringify(user));
            this.$router.push("/client");
          }
        })
        .catch((error) => {
          console.log("error");
        });
    },
    register() {
      let data = {
        nume: this.registerData.nume,
        prenume: this.registerData.prenume,
        email: this.registerData.email,
        telefon: this.registerData.telefon,
        parola: this.registerData.password,
      };
      axios.post("http://localhost:8080/api/clienti", data).then((res) => {
        console.log(res.data.user);
      });
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100vh;
}
.green.accent-4 {
  color: white;
}
</style>
