<template>
  <v-layout row wrap justify-center align-center id="main">
    <v-app-bar app color="green accent-4">
      <h2>FOOD WASTE</h2>
    <v-layout row wrap justify-end>
      <v-btn @click="logout()">Rezervari</v-btn> 
      <v-btn @click="logout()">Restaurante</v-btn>  
      <v-btn @click="logout()">Logout</v-btn>  
    </v-layout>
    </v-app-bar>
   <v-layout row wrap justify-center align-start>
      <v-card v-bind:class="currentTheme" v-drag width="300" v-for="(note, index) in notes" :key="index">
        
        <v-card-text outlined color="red">
          
          <h3>{{ note.title }}</h3>
          <p>{{ note.content }}</p>
          <v-btn :color="note.state ? 'success' : 'error'" fab small>
            <v-icon v-if="note.state">mdi-check</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
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
          <v-btn class="ml-2"
            color="primary"
            fab
            small
            @click="chooseColor=true;switchTheme(currentTheme,index)"
           >

            <v-icon color="white">mdi-palette</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
      <v-dialog v-model="newNote" :overlay="false" max-width="700px" transition="scale-transition">
      <v-card>
        <v-card-text>
          <div>
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu> 
          <v-text-field 
            label="Outlined"
            outlined
            v-model="task">
          > 
          </v-text-field> 
            <v-btn color="primary lighten-1" fab @click="submitTask">
        <v-icon>mdi-plus-thick</v-icon>
      </v-btn> 
          </div> 

          <div v-for="(task,index) in tasks" :key="index">
          <h2>{{task.name}}
           <v-btn
            class="ml-2"
            color="primary"
            fab
            small
            @click="editTask(index)">
            <v-icon color="white">mdi-square-edit-outline</v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            color="primary"
            fab
            small
            @click="deleteTask"
          >
            <v-icon color="white">mdi-delete</v-icon>
          </v-btn>
          </h2>        
          </div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="createNote()">Create list</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
      <template>
        <div class="text-center">
          <v-dialog v-model="deleteNotToAsk" width="500">
            <v-card class="pa-4">
              <v-card-text>
              <h3>Are you sure?</h3>
              </v-card-text>
              <v-card-actions>
              <v-btn color="success" @click="deleteNote(notes._id)">Yes</v-btn>
              <v-btn color="error" @click="deleteNotToAsk = false"
                >Cancel</v-btn
              >
              </v-card-actions>
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
          <v-dialog v-model="chooseColor" width="500">
            <v-card class="pa-4">
               <v-card-text >
              <h3>Choose your color card</h3>
              <div id="app">
              </div>
              <div class="theme-option">
              <div id="theme-blue" v-bind:class="{'active':currentTheme==='theme-blue'}"
              v-on:click="switchTheme('theme-blue',color._id)" class="theme-blue"></div>

              <div id="theme-red" v-bind:class="{'active':currentTheme==='theme-red'}"
              v-on:click="switchTheme('theme-red')" class="theme-red"></div>

              <div id="theme-yellow" v-bind:class="{'active':currentTheme==='theme-yellow'}"
              v-on:click="switchTheme('theme-yellow')" class="theme-yellow"></div>

              <div id="theme-grey" v-bind:class="{'active':currentTheme==='theme-grey'}"
              v-on:click="switchTheme('theme-grey')" class="theme-grey"></div>

              <div id="theme-green" v-bind:class="{'active':currentTheme==='theme-green'}"
              v-on:click="switchTheme('theme-green')" class="theme-green"></div>

              <div id="theme-violet" v-bind:class="{'active':currentTheme==='theme-violet'}"
              v-on:click="switchTheme('theme-violet')" class="theme-violet"></div>

              <div id="theme-brown" v-bind:class="{'active':currentTheme==='theme-brown'}"
              v-on:click="switchTheme('theme-brown')" class="theme-brown"></div>

              <div id="theme-pink" v-bind:class="{'active':currentTheme==='theme-pink'}"
              v-on:click="switchTheme('theme-pink')" class="theme-pink"></div>
              </div>         
              </v-card-text>             
              <v-card-actions>
                <v-btn color="primary" @click="updateNote(noteEdit._id)"
                  >Update note</v-btn>
              </v-card-actions>          
            </v-card>
          </v-dialog>
        </div>
      </template></v-layout
    ></v-layout
  >
  
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
      newNote: false,
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
  istoric(){
    this.$router.push("/form");
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