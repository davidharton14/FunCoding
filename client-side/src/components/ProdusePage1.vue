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
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          DUBLU CRISPY BURGER
        </div>
        <v-list-item-title class="text-h5 mb-1">
          10 bucati
        </v-list-item-title>
        <v-list-item-title v-model="rezervareToCreate.pret" class="text-h5 mb-1">
          5 lei/bucata
        </v-list-item-title>
        <v-list-item-subtitle>Double trouble într-un burger: Dublu Crispy Burger. Ia-ți 2 Crispy Strips®, castraveți murați, o felie de brânză Cheddar și sos burger. </v-list-item-subtitle>
      </v-list-item-content>

     
       <v-img
      height="100" width="50"
      src="../assets/1.jpg"
    ></v-img>
   
    </v-list-item>
    <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='DUBLU CRISPY BURGER'
        rezervareToCreate.cantitate='10 bucati'
        rezervareToCreate.pret='5 lei'
        deleteNotToAsk = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
    </v-card-actions>
   
  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          DUBLU BOOSTER
        </div>
        <v-list-item-title class="text-h5 mb-1">
          5 bucati
        </v-list-item-title>
          4 lei/bucata
        <v-list-item-subtitle>Când ai chef de pui #pebune, dar ți-e și super poftă de ceva nepicant, alegi KFC Dublu Booster. 2 bucăți de pulpă de pui nepicante, 2 felii de brânză Cheddar, castraveți murați, sos burger și ketchup, toate puse într-o chiflă pufoasă. </v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="160" width="50"
      src="../assets/2.jpg"
    ></v-img>

    </v-list-item>

     <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='DUBLU BOOSTER'
        rezervareToCreate.cantitate='5 bucati'
        rezervareToCreate.pret='4 lei/bucata'
        deleteNotToAsk2 = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk2" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk2 = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
    </v-card-actions>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         DUBLU HOT BOOSTER
        </div>
        <v-list-item-title class="text-h5 mb-1">
          15 bucati
        </v-list-item-title>
        <v-list-item-title class="text-h5 mb-1">
          4 lei/bucata
        </v-list-item-title>
        <v-list-item-subtitle>Spice it up cu Dublu Hot Booster: 2 bucăți de pulpă de pui picantă peste care adăugăm 2 felii de brânză Cheddar, castraveți murați, muștar și ketchup, pe care le punem într-o chiflă proaspătă! </v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="160" width="50"
      src="../assets/3.jpg"
    ></v-img>
    </v-list-item>

   <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='DUBLU HOT BOOSTER'
        rezervareToCreate.cantitate='15 bucati'
        rezervareToCreate.pret='4 lei/bucata'
        deleteNotToAsk3 = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk3" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk3 = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
    </v-card-actions>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          ZINGER BURGER
        </div>
        <v-list-item-title class="text-h5 mb-1">
         11 bucati
        </v-list-item-title>
        <v-list-item-title class="text-h5 mb-1">
         5 lei/bucata
        </v-list-item-title>
        <v-list-item-subtitle>Clasic, simplu și delicios! 100% piept de pui crocant și picant, salată Iceberg și sos burger, plus chiflă proaspătă! Zinger Burger, corect! </v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="160" width="50"
      src="../assets/4.jpg"
    ></v-img>
    </v-list-item>

   <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='ZINGER BURGER'
        rezervareToCreate.cantitate='11 bucati'
        rezervareToCreate.pret='5 lei/bucata'
        deleteNotToAsk4 = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk4" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk4 = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
          </v-card-actions>

  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          FILLET BURGER
        </div>
        <v-list-item-title class="text-h5 mb-1">
          13 bucati
        </v-list-item-title>
        <v-list-item-title class="text-h5 mb-1">
          4 lei/bucata
        </v-list-item-title>
        <v-list-item-subtitle>Bucură-te de un Fillet Burger: burger de pui nepicant, cu salată Iceberg și sos burger, toate puse într-o chiflă proaspătă!</v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="160" width="50"
      src="../assets/5.jpg"
    ></v-img>
    </v-list-item>

      <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='FILLET BURGER'
        rezervareToCreate.cantitate='13 bucati'
        rezervareToCreate.pret='4 lei/bucata'
        deleteNotToAsk5 = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk5" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk5 = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
    </v-card-actions>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          TWISTER VEGETARIAN
        </div>
        <v-list-item-title class="text-h5 mb-1">
          9 bucati
        </v-list-item-title>
        <v-list-item-title class="text-h5 mb-1">
          4 lei/bucata
        </v-list-item-title>
        <v-list-item-subtitle>Gusturile #pebune nu se discută, așa că dacă preferi un Twister® vegetarian, ia-ți-l pe cel cu cartofi prăjiți, brânză Cheddar, roșii, salată Iceberg și sos burger! </v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="160" width="50"
      src="../assets/6.jpg"
    ></v-img>
    </v-list-item>

   <v-card-actions>
      
      <v-btn
        outlined
        text
        @click="createRezervare();
        rezervareToCreate.denumire_restaurant='KFC'
        rezervareToCreate.denumire_mancare='TWISTER VEGETARIAN'
        rezervareToCreate.cantitate='9 bucati'
        rezervareToCreate.pret='4 lei/bucata'
        deleteNotToAsk6 = true;
        "
      >
        REZERVA
      </v-btn>
       <v-dialog v-model="deleteNotToAsk6" width="500">
            <v-card>
              <h4>Ai facut o rezervare!
              </h4>
              <v-btn color="success" @click="deleteNotToAsk6 = false"
                >OK</v-btn
              >
            </v-card>
          </v-dialog>
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
      client: new Object(),
      notes: [],
      deleteNotToAsk: false,
      dialog: false,
      noteId: null,
      newRezervare: false,
      rezervareToCreate:new Object(),
      deleteNotToAsk2:false,
      deleteNotToAsk3:false,
      deleteNotToAsk4:false,
      deleteNotToAsk5:false,
      deleteNotToAsk6:false
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getNotes();
  },
  methods: {
    getNotes() {
      var id = this.client._id;
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
        id_client:this.rezervareToCreate.id_client,
        denumire_restaurant:this.rezervareToCreate.denumire_restaurant,
        denumire_mancare:this.rezervareToCreate.denumire_mancare,
        cantitate:this.rezervareToCreate.cantitate,
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