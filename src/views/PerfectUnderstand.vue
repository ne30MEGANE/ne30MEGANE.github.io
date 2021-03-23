<template>
  <div style="height: 100px;">
    <div id="border"></div>
    <p>CSS<br>完全に理解した</p>
  </div>
</template>


<script>
export default {
  head: {
    title: {
      inner: 'CSS',
      complement: '完全に理解した'
    },
    meta: [
      { name: 'robots', content: 'noindex'}
    ]
  }
}
</script>

<style scoped>
#border {
  position: absolute;
  top: 30;
  left: 30;
  border: solid black 2px;
  border-radius: 15px;
  width: 190px;
  height: 90px;
}

p {
  position: absolute;
  margin: 0;
  font-family: serif;
  font-size: 18pt;
  padding-left: 60px;
}

</style>