<template>
  <section v-for ="dato in data" :key="dato.id">
    <SingleCard 
    :userid = "dato.id"
    :name="dato.name"
    :username="dato.username"
    :email="dato.email"
    :togglePopup="() => tooglePopup('buttonTrigger')"
    :eliminar="() => eliminar(dato.id)"
    />
  </section>

  <section v-for ="dato in data" :key="dato.id">
   
    <!-- <div v-if ="dato.id == 1"> -->
    
     <PopUp 
         v-if ="popupTriggers.buttonTrigger"
         :userid="dato.id"
         :togglePopup="() => tooglePopup('buttonTrigger')"
         :name="dato.name"
         :username="dato.username"
         :email="dato.email"
         :street="dato.address.street"
         :suite="dato.address.suite"
         :city="dato.address.city"
         :zipcode="dato.address.zipcode"
         :lat="dato.address.lat"
         :lng="dato.address.lat"
         :phone="dato.phone"
         :website="dato.website"
         :companyname="dato.company.name"
         :catchPhrase="dato.company.catchPhrase"
         :bs="dato.company.bs"
        >
    </PopUp>
  <!-- </div> -->
</section>
</template>

<script>
import PopUp from './components/popup-detail.vue'
import SingleCard from './components/single-card.vue'
import  { ref } from 'vue';
//import Detalle from './components/user-detalle.vue
import { Delete } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

export default {
  name: 'App',
  components: {
   // Detalle,
    SingleCard,
    PopUp
  },
  setup(){

   const popupTriggers = ref({ 
     buttonTrigger: false
    });
  const tooglePopup = (trigger, id) => {
    popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    this.userid = id;
  };
 // const eliminar = (id) => {
   // console.log(id)
  //  console.log(show)
    // let indexBorrado
    // console.log(this.data)
    // for (let user of this.data){
      // if(user.id == id) {
        //  indexBorrado = this.data.indexOf(user.id)   
        //  console.log(this.data)
        // console.log(indexBorrado)
        // this.data = this.data.splice(indexBorrado,1)
        // console.log("soy eliminar")     
      //  }   
    //  } 
     
    //console.log("soy eliminar") 
     
     
 //}

  return  {
    PopUp,
    popupTriggers,
    tooglePopup,
    // eliminar
    
}
  
},
  data () {
  return {
    data: [],
    Delete,
    show : false
  }
},
computed () {},
// setup() {

// }
  created () {
   this.getUsers()
 },
 methods: {
 // asyncronus function that fetches the data from api, then sent to data and looped in v-for in template
 async getUsers () {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json()
   console.log('data del componente my-cards')
   console.log(data)
   this.data = data
  },

  popUpToggle () {
    this.show = !this.show
  },

    eliminar (id)  {
      console.log(id)
      console.log('funcion normal wliminar')
      console.log(this.data)
      console.log(typeof(this.data))
      console.log(this.data[1])
      console.log(typeof(this.data))
      this.data.splice( 1, 1)
  // for (let user of this.data){
    //  if(user.id == id) {
  //  let indexBorrado = this.data.indexOf(user.id)
      //  this.data.splice(indexBorrado,1)
      // }
    //  }
  }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
