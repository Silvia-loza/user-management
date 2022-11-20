<template>
  <section v-for ="(dato, index) in data" :key="index">
    <SingleCard 
    :userid = "dato.id"
    :name="dato.name"
    :username="dato.username"
    :email="dato.email"
    :togglePopup="() => tooglePopup('buttonTrigger')"
    :eliminar="() => eliminar(index)"
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
  const tooglePopup = (trigger) => {
    popupTriggers.value[trigger] = !popupTriggers.value[trigger]
   
  };
  return  {
    PopUp,
    popupTriggers,
    tooglePopup
    
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

  eliminar (index)  {
      this.data.splice(index , 1)
      console.log('Elemento borrado')
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
