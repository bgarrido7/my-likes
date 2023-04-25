<template>
    <div>
      <img src="./obras.webp">
    </div>
</template>


<script>
export default {
  name: 'UnderConstruct',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


div{
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
}
img{
  width: fit-content;
  height: fit-content;
 }

</style>