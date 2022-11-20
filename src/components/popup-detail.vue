<template lang="html">

  <section class="popup-detail">
    
    <div class="popup-inner">
      <ul>
        <li>
          <label>Id: </label>
          <span>{{userid}}</span>
         <label>Name: </label>
         <span>{{name}}</span>
       </li>
        <li>
         <label>Username: </label> 
         <span>{{username}}</span>
       </li>
        <li>
         <label>Email:  </label>
         <span>{{email}}</span> 
       </li>
       <li>
        <label>Address:  </label>
        <span>{{street}}</span> 
        <span>{{suite}}</span> 
        <span>{{city}}</span>
        <span>{{zipcode}}</span> 
        <span>{{lat}}</span> 
        <span>{{ln}}</span>
      
        <label>Phone:  </label>
        <span>{{phone}}</span> 
      </li>
      <li>
        <label>Website:  </label>
        <span>{{website}}</span> 
      </li>
      <li>
        <label>Company:  </label>
        <span>{{companyname}}</span> 
        <span>{{catchPhrase}}</span>      
        <span>{{bs}}</span> 
      </li>
      <ElButton @click="togglePopup()" color="#5c84ab"> volver atrás </ElButton>
      
      </ul>
     </div>
    </section>

</template>

<script lang="js">
import { ElButton } from 'element-plus';
import { Delete } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

  export default  {
    name: 'popup-detail',
    components: {ElButton},
    props: [
      'togglePopup',
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
      'catchPhrase',
      'bs',
      'userid'
      
    ],
    
    mounted () {
      this.userid

    },
    data () {
      return {
       data: [],
       Delete
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  $mainColor : #5c84ab;
  $mainDark: #114373;
  $secondaryColor : #8c98a3;
  $contrastColor: #c493b2;
  $shadow : rgba(0, 0, 0, 0.2);
  .popup-detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left:0 ;
    right: 0;
    z-index: 99;
    background-color:$shadow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup-inner {
    background: white;
    padding: 32px;
  }
  ElButton {
    margin: 10%;
  }
  label {
    color: $mainColor;
    margin-right:1em;
    font-size: large;
     }
    label:hover {
    color:$mainDark;
     }
    span {
    justify-content: flex-end;
    font-size: large;
    color:$secondaryColor;
     }
    span:hover {
    color:$contrastColor;
     }

  ul {
    list-style: none;
    list-style-type: none; 
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
     }
    li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.3em 0.7em;
    }
</style>
