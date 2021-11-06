<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
    <v-layout>
      <v-tabs background-color="green accent-4">
      <v-tab @click="rezervari()">Rezervari</v-tab> 
      <v-tab active >Restaurante</v-tab>  
      <v-tab @click="logout()">Logout</v-tab> 
      </v-tabs>
    </v-layout>
    </v-app-bar>
      <v-card 
      
    :loading="loading"
    max-width="374"
    class="mr-10"
  > 
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/kfc.jpg"
    ></v-img>

    <v-card-title>Kentucky Fried Chicken - KFC Romania</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Romania, Restaurant
      </div>

      <div>KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world's second-largest restaurant chain after McDonald's, with 22,621 locations globally in 150 countries as of December 2019. </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="green accent-4"
        text
        @click="produse1()"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card 
    :loading="loading"
    max-width="374"
    class="mr-10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/tr.jpg"
    ></v-img>

    <v-card-title>Taverna Racilor Herăstrău</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Romania, Restaurant
      </div>

      <div>Taverna Racilor este un restaurant pescăresc care face livrări la domiciliu. Încearcă preparete din fructe de mare în locația noastră din Herăstrău</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="green accent-42"
        text
        @click="reserve"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card 
    :loading="loading"
    max-width="374"
    class="mr-10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/cb.jpg"
    ></v-img>

    <v-card-title>Caru' cu bere</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Romania, Restaurant
      </div>

      <div>Tot ce vreţi să ştiţi despre locul preferat al domniilor voastre. Despre locul unde vă puteţi înfrupta din cele mai gustoase bucate şi unde puteţi savura</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="green accent-4"
        text
        @click="reserve"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card 
    :loading="loading"
    max-width="374"
    class="mr-10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/la.jpg"
    ></v-img>

    <v-card-title>Restaurant Dumbrava</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Romania, Restaurant
      </div>

      <div>Cu bune si rele,dar mereu cu drag ,restaurantul nostru,micut ,va asteapta in fiecare zi ,in... Aleea dumbrava minunata, 910021 Calarasi, Romania.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="green accent-4"
        text
        @click="reserve"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card 
    :loading="loading"
    max-width="374"
    class="mr-10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/mc.jpg"
    ></v-img>

    <v-card-title>McDonald's</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Romania, Restaurant
      </div>

      <div>Produsul tău preferat, alături de o porție de cartofi și băutura ta favorită. Alege meniul perfect pentru gustul tău!</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="green accent-4"
        text
        @click="reserve"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card 
    :loading="loading"
    max-width="374"
    class="mr-10"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../assets/m.jpg"
    ></v-img>

    <v-card-title>Mesopotamia</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • omania, Restaurant
      </div>

      <div>Mesopotamia este singurul restaurant de tip fast food din România ce îmbină gustul curcanului și vițel rotisat într-un amestec unic!</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="green accent-4"
        text
        @click="reserve"
      >
        CLICK
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-layout>
</template> 
    </v-layout>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  props:{
    msg:String
  },
  data() {
    return {
      user: new Object(),
      notes: [],
      deleteNotToAsk: false,
      noteEdit: new Object(),
      dialog: false,
      noteId: null,
      newRezervare: false,
      rezervareToCreate:new Object(),
      chooseColor:false,
      currentTheme:localStorage.getItem('theme-color'),
      color:new Object(),
      task:"",
      tasks:[],
      editedTask:null,
      drawer: null,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getNotes();
  },
  methods: {
    getNotes() {
      var id = this.user._id;
      axios.get(`http://localhost:8083/api/notes/${id}`).then((res) => {
        this.notes = res.data.notes;
      });
    },
    updateNote(id) {
      let data = {
        title: this.noteEdit.title,
        content: this.noteEdit.content,
        state: this.noteEdit.state,
      };
      axios.put(`http://localhost:8083/api/notes/${id}`, data).then((res) => {
        console.log(res.data.message);
        this.getNotes();
      });
      this.dialog = false;
    },
    noteToEdit(index) {
      this.dialog = true;
      this.noteEdit = this.notes[index];
    },
    deleteNote() {
      let id = this.noteId;
      axios.delete(`http://localhost:8083/api/notes/${id}`).then((res) => {
        console.log(res.data.message);
        this.getNotes();
        this.deleteNotToAsk = false;
      });
    },
    createRezervare(){
      let data={
        denumire_mancare:this.rezervareToCreate.denumire_mancare,
        contitate:this.rezervareToCreate.contitate,
        pret:this.rezervareToCreate.pret
      }
      let clientId=this.client._id
      axios.post(`http://localhost:8080/api/rezervari/${clientId}`,data)
      .then((res)=>{
         console.log(res.data.message)
         this.newRezervare=false
      })
  },
  switchTheme(theme,index){
    localStorage.setItem('theme-color',theme,index)
    this.currentTheme=localStorage.getItem('theme-color')
    this.color=this.notes[index]
  },
  submitTask(){
    if(this.task.length===0)return;
    if(this.editedTask===null){
    this.tasks.push({
      name:this.task, 
    });
    }else{
      this.tasks[this.editedTask].name=this.task
      this.editedTask=null;
    }
    this.task=""
  },
  deleteTask(index){
     this.tasks.splice(index,1)
  },
  editTask(index){
    this.task=this.tasks[index].name
    this.editedTask=index
  },
  restaurante(){
    this.$router.push("/restaurante");
  },
  rezervari(){
    this.$router.push("/rezervari");
  },
  logout(){
    localStorage.clear()
    this.$router.push({name:"Login"})
  },
  produse1(){
    this.$router.push("/produse_page_1");
  },
}
}
</script>

<style scoped>
#main {
  min-height: 100vh;
}
h2 {
  color: white;
}

</style>