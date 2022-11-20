<template lang="html">

  <section  v-for = "dato in data" :key="dato.userId" class="user-detalle">
    <ul>
      <li>
       <label>Name: </label>
       <span>{{dato.name}}</span>
     </li>
      <li>
       <label>Username: </label> 
       <span>{{dato.username}}</span>
     </li>
      <li>
       <label>Email:  </label>
       <span>{{dato.email}}</span> 
     </li>
     <li>
      <label>Adress:  </label>
      <span>{{dato.address.street}}</span> 
      <span>{{dato.address.suite}}</span> 
      <span>{{dato.address.city}}</span>
      <span>{{dato.address.zipcode}}</span> 
      <span>{{dato.address.geo.lat}}</span> 
      <span>{{dato.address.geo.ln}}</span> 
    </li>
    <li>
      <label>Phone:  </label>
      <span>{{dato.phone}}</span> 
    </li>
    <li>
      <label>Website:  </label>
      <span>{{dato.website}}</span> 
    </li>
    <li>
      <label>Company:  </label>
      <span>{{dato.company.name}}</span> 
      <span>{{dato.company.catchPhrase}}</span>      
      <span>{{dato.company.bs}}</span> 
    </li>
     <li class="list-buttons">
      <ElButton color="#5c84ab" :icon="Delete" plain="false" circle/>
      <ElButton color="#5c84ab"> Go Back </ElButton>
     </li>  
   </ul>
  </section>

</template>

<script lang="js">
import { ElButton } from 'element-plus';
import { Delete } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

  export default  {
    name: 'user-detalle',
    props: [
      'name',
      'username',
      'email',
      'address',
      'street',
      'suite',
      'city',
      'zipcode',
      'geo',
      'lat',
      'lng',
      'phone',
      'website',
      'company',
      'companyname',
      'catch',
      'catchPhrase',
      'cbs'
    ],
    mounted () {

    },
    data () {
      return {
        data: [],
        Delete,
        ElButton
      }
    },
    created () {
  this.getUsers()
},
    methods: {
      async getUsers () {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json()
   console.log('data del componente detale')
   console.log(data)
   this.data = data
 },
  //  getUSerById(id) {

  //  }
},

    computed: {
      
    }
}


</script>

<style scoped lang="scss">
  .user-detalle {

  }
</style>
