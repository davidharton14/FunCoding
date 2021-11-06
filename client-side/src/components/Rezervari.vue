<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
    <v-layout row wrap justify-end>
      <v-tabs  center-active background-color="green accent-4">
      <v-tab active>Rezervari</v-tab> 
      <v-tab @click="restaurante()">Restaurante</v-tab>  
      <v-tab @click="logout()">Logout</v-tab> 
      </v-tabs>
    </v-layout>
    </v-app-bar>
   <v-layout row wrap justify-center align-start>
      <v-card v-for="(rezervare, index) in rezervari" :key="index">
        <v-card-text>
          <h3>{{ rezervare.denumire_restaurant }}</h3>
          <p>{{ rezervare.denumire_mancare }}</p>
          
          <v-btn
            class="ml-2"
            color="primary"
            fab
            small
            @click="noteToEdit(index)"
          >
            <v-icon color="white">mdi-square-edit-outline</v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            color="primary"
            fab
            small
            @click="
              deleteNotToAsk = true;
              noteId = note._id;
            "
          >
            <v-icon color="white">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
      <template>
        <div class="text-center">
          <v-dialog v-model="deleteNotToAsk" width="500">
            <v-card>
              <h4>Are you sure?</h4>
              <v-btn color="success" @click="deleteNote(note._id)">Yes</v-btn>
              <v-btn color="error" @click="deleteNotToAsk = false"
                >Cancel</v-btn
              >
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                <h3 align-center>Editeaza nota</h3>
                <v-btn color="primary" text @click="dialog = false"> </v-btn>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="Title"
                  v-model="noteEdit.title"
                ></v-text-field>
                <v-text-field
                  label="Content"
                  v-model="noteEdit.content"
                ></v-text-field>
                <v-btn color="error" @click="noteEdit.state = true">DONE</v-btn>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="updateNote(noteEdit._id)"
                  >Update note</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template></v-layout>
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
      rezervari: [],
      deleteNotToAsk: false,
      noteEdit: new Object(),
      dialog: false,
      noteId: null,
      newRezervare: false,
      noteToCreate:new Object(),
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
      var id = this.client._id;
      axios.get(`http://localhost:8080/api/rezervari/${id}`).then((res) => {
        this.rezervari = res.data.rezervari;
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
    createNote(){
      let data={
        title:this.noteToCreate.title,
        content:this.noteToCreate.content
      }
      let userId=this.user._id
      axios.post(`http://localhost:8083/api/notes/${userId}`,data)
      .then((res)=>{
         console.log(res.data.message)
         this.newNote=false
         this.getNotes()
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
  logout(){
    localStorage.clear()
    this.$router.push({name:"Login"})

  }
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