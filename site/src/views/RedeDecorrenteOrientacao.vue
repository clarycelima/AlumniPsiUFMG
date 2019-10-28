<template>
  <div>
    <cabecalho titulo="Redes decorrente da orientação"/>
    <div class="container-fluid mb-5">
                <grafo
                  :data="completo"
                  titulo="Rede decorrente da orientação"
                  v-if="completo"
                  :label-on-simbol-size="5"
                  :labels="[1, 2, 3]"
                  :legend="['Egresso', 'Orientador', 'Externo']"
                  category-field="tipo"
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
  name: "RedesOrientacoes",
  components: { Cabecalho, Grafo },
  data() {
    return {
      completo: undefined,
    };
  },
  computed: {},
  mounted: async function() {
    await axios.get("data/rede_decorrente_orientacao.gexf").then(data => {
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