<template>
  <div>
    <cabecalho titulo="Redes de orientações"/>
    <div class="container mb-5">
                <grafo
                  :data="completo"
                  titulo="Rede de orientações"
                  v-if="completo"
                  :label-on-simbol-size="5"
                  :labels="[0 ,1]"
                  :legend="['Egresso', 'Orientador']"
                  category-field="autortipo"
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
    await axios.get("data/orientacoes.gexf").then(data => {
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