<template>
  <v-chart :options="tree" autoresize/>
</template>

<script>
export default {
  name: "Arvore",
  props: {
    data: { type: Object, default: undefined },
    titulo: { type: String, default: "" }
  },
  data: function() {
    return {
      tree: undefined,

      data2: {
        name: "flare",
        children: [
          {
            name: "flex",
            children: [{ name: "FlareVis", value: 4116 }]
          },
          {
            name: "scale",
            children: [
              { name: "IScaleMap", value: 2105 },
              { name: "LinearScale", value: 1316 },
              { name: "LogScale", value: 3151 },
              { name: "OrdinalScale", value: 3770 },
              { name: "QuantileScale", value: 2435 },
              { name: "QuantitativeScale", value: 4839 },
              { name: "RootScale", value: 1756 },
              { name: "Scale", value: 4268 },
              { name: "ScaleType", value: 1821 },
              { name: "TimeScale", value: 5833 }
            ]
          },
          {
            name: "display",
            children: [{ name: "DirtySprite", value: 8833 }]
          }
        ]
      }
    };
  },
  mounted: function() {
    if (this.data != undefined) {
      const option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        title: {
          text: this.titulo,
          subtext: "Default layout",
          top: "bottom",
          left: "right"
        },
        legend: {
          top: "5%",
          left: "5%",
          orient: "vertical",
          data: [
            {
              name: "tree1",
              icon: "rectangle"
            },
            {
              name: "tree2",
              icon: "rectangle"
            }
          ],
          borderColor: "#c23531"
        },
        series: [
          {
            type: "tree",
            data: [this.data],
            top: "5%",
            bottom: "55%",
            layout: "radial",
            symbol: "emptyCircle",
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 750
          },
          {
            type: "tree",
            data: [this.data2],
            top: "55%",
            bottom: "5%",
            layout: "radial",
            symbol: "emptyCircle",
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 750
          }
        ]
      };
      this.tree = option;
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
