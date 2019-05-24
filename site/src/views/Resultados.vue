<template>
  <div>
    <cabecalho titulo="Resultados"/>
    <div class="container mb-5 text-center">
        <b-tabs content-class="mt-3">
        <b-tab title="Imagens" active>
        <h2>Por ano</h2>
        <img src="@/assets/graficos/por-ano.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Quantidade de periódicos</h2>
        <img src="@/assets/graficos/periodicos.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Quantidade de periódicos estrangeiros</h2>
        <img src="@/assets/graficos/periodicos-estrangeiros.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Artigos publicados pelo egresso em coautoria com o orientador e com terceiros</h2>
        <img src="@/assets/graficos/egresso-coautoria-orientador.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Por unidades da UFMG</h2>
        <img src="@/assets/graficos/unidades-ufmg.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Colaboração</h2>
        <img src="@/assets/graficos/colaboracao.png" alt="" style="max-width:100%;"/>
        <br/><br/>
          
        </b-tab>
        <b-tab title="Mapas">
          
        <h2>Colaboração por estados da federação</h2>
        <img src="@/assets/graficos/mapa-brasil.png" alt="" style="max-width:100%;"/>
        <br/><br/>
        <h2>Colaboração por países</h2>
        <img src="@/assets/graficos/mapa-mundo.png" alt="" style="max-width:100%;"/>
        <br/><br/>

        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Cabecalho from "@/components/Cabecalho";
export default {
  name: "Resultados",
  components: {Cabecalho}
};
</script>

<style>
</style>