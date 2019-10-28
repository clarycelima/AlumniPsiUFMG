<template>
  <div>
    <cabecalho titulo="Rede por área de concentração"/>
    <div class="container-fluid mb-5">
                <grafo
                  :data="completo"
                  :labels="['Não Disponível', 'PSO', 'EP', 'DH']"
                  :legend="['Terceiros', 'Psicologia Social', 'Estudos Psicanalíticos', 'Desenvolvimento Humano']"
                  titulo="Rede por área de concentração"
                  category-field="área (preencher)"
                  v-if="completo"
                  :label-on-simbol-size="8"
                />
            
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { parse as gexfParser } from "echarts/extension/dataTool/gexf";

import Cabecalho from "@/components/Cabecalho";
import Grafo from "@/components/grafos/Grafo";

export default {
  name: "Redes",
  components: { Cabecalho, Grafo },
  data() {
    return {
      completo: undefined,
    };
  },
  computed: {},
  mounted: async function() {
    await axios.get("data/rede_area_concentracao.gexf").then(data => {
      this.completo = gexfParser(data.data);
      this.completo.nodes.forEach(function(node) {
        node.attributes.autortipo--;
      });
    });
  }
};
</script>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
  min-height: 1000px;
}
</style>