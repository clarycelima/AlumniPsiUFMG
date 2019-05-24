<template>
  <div>
    <cabecalho titulo="Dados"/>
    <div class="container mb-5">
      <div class="row">
        <div class="col-9">
          <div class="card">
            <div class="card-body">
              <h1 class="mb-4">Dados utilizados</h1>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="nav flex-column nav-pills" aria-orientation="vertical">
            <router-link to="/dados/publicacoes" class="nav-link">Dados de publicações</router-link>
            <router-link to="/dados/orientacoes" class="nav-link">Dados de orientações</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cabecalho from "@/components/Cabecalho";
export default {
  name: "Redes",
  components: {Cabecalho}
};
</script>

<style>
</style>