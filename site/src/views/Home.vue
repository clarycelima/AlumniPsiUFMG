<template>
  <div>
    <cabecalho titulo="Alumni Psi UFMG" descricao-primaria="Descrição..." descricao-secundaria="Mais info..." :conheca="true"/>
    <div class="home container">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cabecalho from '@/components/Cabecalho'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Cabecalho
  }
}
</script>
