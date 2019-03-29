<template>
  <div id="app">
    <navbar/>
    <main>
      <router-view/>
    </main>
    <rodape/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'
export default {
  name: 'App',
  components: {Navbar, Rodape} 
}
</script>

<style lang="scss" scoped>
main{
  padding-top: 56px;
}
</style>
