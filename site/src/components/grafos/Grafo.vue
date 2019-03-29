<template>
    <v-chart :options="graph" autoresize/>
</template>

<script>
export default {
  name: "Grafo",
  props: {
    data: { type: Object, default: undefined },
    labels: { type: Array, default: () => ([]) },
    categoryField: { type: String, default: "autortipo" },
    titulo: { type: String, default: '' }
  },
  data: function() {
    return {
      graph: undefined
    };
  },
  mounted: function() {
    if (this.data != undefined) {
      const categoryField = this.categoryField;
      this.data.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
          normal: {
            show: node.symbolSize > 20
          }
        };
        node.category = node.attributes[categoryField];
        delete node['attributes']
      });
      const option = {
        title: {
          text: this.titulo,
          subtext: "Default layout",
          top: "bottom",
          left: "right"
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: this.labels
          }
        ],
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "Indivíduo",
            type: "graph",
            layout: "none",
            data: this.data.nodes,
            links: this.data.links,
            categories: this.labels.map(i => ({ name: i })),
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            label: {
              position: "right",
              formatter: "{b}"
            },
            lineStyle: {
              color: "source",
              curveness: 0.3
            },
            emphasis: {
              lineStyle: {
                width: 4
              }
            }
          }
        ]
      };
      this.graph = option;
    }
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
  min-height: 500px;
}
</style>
