<template>
  <div>
    <base-button type="danger" @click='buttonClick' class='button'>Danger</base-button>
  </div>
</template>
<script>
  import {fetchList} from '../http/api/home';
  export default {
    data() {
      return {
      };
    },
    methods: {
      buttonClick () {
        console.log(11111111111);
        fetchList().then(response => {
          console.log(response)
        }).catch((e)=>{
          console.log(e)
        })
      }
    }
  };
</script>
<style>
  .button {
    margin: 200px;
  }
</style>
