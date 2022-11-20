<template lang="html">

  <section class="single-card">
   
      <ul>
         <li>
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
        <li class="list-buttons">
         <ElButton  @click="eliminar()" color="#5c84ab" :icon="Delete" plain="false" circle/>
         <ElButton   @click="togglePopup()" color="#5c84ab"> Ver más </ElButton>
        </li>  
      </ul>
  </section>

</template>

<script lang="js">
import { ElButton } from 'element-plus';
import { Delete } from '@element-plus/icons-vue'

  export default  {
    name: 'single-card',
    components: { ElButton },
    props: [
      'name',
      'username',
      'email',
      'userid',
      'showDetail',
      'togglePopup',
      'eliminar',
      'data'
    ],
    mounted () {

    },
    data () {
      return {
        Delete
      }
    },
    methods: {
      viewdetail() {
        this.userid
        // this.showDetail = !this.showDetail
      },
      hola() {
        console.log('Hola!')
      }

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
.single-card{
display: flex;
justify-content: center;
margin: 5%;
padding: 0.5% 3%;
box-shadow: 0.5px 9px 9px 4px $shadow;
 }
 .single-card:hover{
  box-shadow: 1px 18px 18px 8px $shadow;
 }
.list-buttons {
justify-content: space-between;
flex-direction: row;
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
font-size: x-large;
 }
span:hover {
color:$contrastColor;
 }
ul {
list-style: none;
list-style-type: none; 
display: flex;
flex-direction: column;
/* align-items: center; */
list-style: none;
padding-left: 0;
/*align-items: flex-start;*/
 }
li {
display: flex;
flex-direction: column;
align-items: flex-start;
// justify-content: flex-start;
padding: 0.3em 0.7em;
color: $secondaryColor;
 }
</style>
