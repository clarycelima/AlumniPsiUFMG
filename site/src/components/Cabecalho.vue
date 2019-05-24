<template>
  <div class="jumbotron text-center">
    <h1 class="display-4">{{titulo}}</h1>
    <p class="lead" v-if="descricaoPrimaria">{{descricaoPrimaria}}</p>
    <hr class="my-4" v-if="descricaoPrimaria && descricaoSecundaria">
    <div v-if="descricaoSecundaria" class="container text-justify"><p>{{descricaoSecundaria}}</p></div>
    <p class="lead" v-if="conheca">
      <router-link class="btn btn-primary btn-lg" to="/conheca" role="button">Saiba mais sobre o Projeto</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cabecalho",
  props: {
    titulo: { type: String, required: true },
    descricaoPrimaria: { type: String },
    descricaoSecundaria: { type: String },
    conheca: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
.jumbotron{
    padding: 1rem 2rem;
    border-radius: 0;
    background: darken($primary, 3);// url('../assets/network.png') center top no-repeat;
    //background-size: cover;
    color: lighten($primary, 30);
    .display-4{
        font-size: 2.5rem;
    }
    .btn.btn-primary{
        background: darken($primary, 8);
    }
}
</style>
