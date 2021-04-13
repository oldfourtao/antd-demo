<template>
  <div>
      <a-button type="success">ButtonC</a-button>
      <div>
          <p>C获取buttonA数据:{{btnA}}</p>
          <p>C获取buttonB数据:{{btnB}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            btnA:'',
            btnB: ''
        }
    },
    mounted(){
        this.$EventBus.$on('btn-a',e=>{
            console.log(e)
            this.btnA = e;
        });
        this.$EventBus.$on('btn-B',e=>{
            console.log(e)
            this.btnB = e;
        });
    }

}
</script>

<style>

</style>