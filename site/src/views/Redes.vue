<template>
  <div>
    <cabecalho titulo="Redes de colaboração"/>
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-3">
          <div class="nav flex-column nav-pills" aria-orientation="vertical">
            <a
              href="#"
              @click.prevent="() => tab = 0"
              :class="`nav-link ${tab == 0 ? 'active' : ''}`"
            >Redes</a>
            <a
              href="#"
              @click.prevent="() => tab = 1"
              :class="`nav-link ${tab == 1 ? 'active' : ''}`"
            >Completa</a>
            <a
              href="#"
              @click.prevent="() => tab = 2"
              :class="`nav-link ${tab == 2 ? 'active' : ''}`"
            >Somente Artigos</a>
            <a
              href="#"
              @click.prevent="() => tab = 3"
              :class="`nav-link ${tab == 3 ? 'active' : ''}`"
            >Somente Orientações</a>
          </div>
        </div>
        <div class="col-9">
          <div class="card">
            <div class="card-body">
              <div v-if="tab == 0">
                <h1 class="mb-4">Sobre as redes produzidas</h1>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
                <p>Falar sobre as redes...</p>
              </div>
              <div v-if="tab == 1">
                <grafo
                  :data="completo"
                  :labels="['Egresso', 'Orientador', 'Externo']"
                  titulo="Rede Completa"
                  v-if="completo"
                />
              </div>
              <div v-if="tab == 2"></div>
              <div v-if="tab == 3">
                <arvore :data="orientacoes" titulo="Árvore Genealógica" v-if="orientacoes"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { parse as gexfParser } from "echarts/extension/dataTool/gexf";

import Cabecalho from "@/components/Cabecalho";
import Grafo from "@/components/grafos/Grafo";
import Arvore from "@/components/grafos/Arvore";

export default {
  name: "Redes",
  components: { Cabecalho, Grafo, Arvore },
  data() {
    return {
      completo: undefined,
      orientacoes: undefined,
      tab: 0
    };
  },
  computed: {},
  mounted: async function() {
    await axios.get("data/teste.gexf").then(data => {
      this.completo = gexfParser(data.data);
      this.completo.nodes.forEach(function(node) {
        node.attributes.autortipo--;
      });
    });
    await axios.get("data/flare.json").then(data => {
      this.orientacoes = data.data;
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