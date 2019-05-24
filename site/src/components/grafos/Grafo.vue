<template>
    <v-chart :options="graph" autoresize/>
</template>

<script>
export default {
  name: "Grafo",
  props: {
    data: { type: Object, default: undefined },
    labels: { type: Array, default: () => ([]) },
    legend: { type: Array, default: () => ([]) },
    categoryField: { type: String, default: undefined },
    titulo: { type: String, default: '' },
    labelOnSimbolSize: {type: Number, default: 20}
  },
  data: function() {
    return {
      graph: undefined,
      legendall: []
    };
  },
  mounted: function() {
    if (this.data != undefined) {
      const categoryField = this.categoryField;
      const self = this;
      this.data.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
          normal: {
            show: node.symbolSize > self.labelOnSimbolSize
          }
        };
        if (self.categoryField !== undefined){
          node.category = node.attributes[categoryField];
          if (self.legend.length > self.labels.indexOf(node.attributes[categoryField])) {
            node.category = self.legend[self.labels.indexOf(node.attributes[categoryField])]
          }
          if (self.legendall.indexOf(node.category) === -1){
            self.legendall.push(node.category)
          }
        }
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
            data: this.legendall
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
            categories: this.labels.map(i => ({ name: this.legendall.length < this.labels.indexOf(i) !== -1 ? this.legendall[this.labels.indexOf(i)] : i })),
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
