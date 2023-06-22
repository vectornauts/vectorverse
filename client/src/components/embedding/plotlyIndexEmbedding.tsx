// Import libraries
import React from "react";
import Plot from "react-plotly.js";
import { boxMullerRandom } from "@/lib/math";
import { Layout } from "plotly.js";

const generateData = (): { x: number[]; y: number[] }[] => {
  const classes = 5;
  const pointsPerClass = 20000;
  const jitter = 1; // adjust this to change the spread of each blob

  return Array.from({ length: classes }, () => {
    const centerX = Math.random() * 10; // Random center for x values
    const centerY = Math.random() * 10; // Random center for y values

    return {
      x: Array.from(
        { length: pointsPerClass },
        () => centerX + boxMullerRandom() * jitter
      ),
      y: Array.from(
        { length: pointsPerClass },
        () => centerY + boxMullerRandom() * jitter
      ),
    };
  });
};

const PlotlyScatterEmbedding: React.FC = () => {
  const classData = generateData();

  const plotlyColorPalette = [
    "#1f77b4", // muted blue
    "#ff7f0e", // safety orange
    "#2ca02c", // cooked asparagus green
    "#d62728", // brick red
    "#9467bd", // muted purple
    "#8c564b", // chestnut brown
    "#e377c2", // raspberry yogurt pink
    "#7f7f7f", // middle gray
    "#bcbd22", // curry yellow-green
    "#17becf", // blue-teal
  ];

  const traces = classData.map((data, i) => ({
    x: data.x,
    y: data.y,
    type: "scattergl" as const, // Specify type as a constant
    mode: "markers" as const,
    marker: {
      color: plotlyColorPalette[i % plotlyColorPalette.length],
      size: 1,
      opacity: 0.75,
    }, // cycle through colors
    name: `Cluster ${i + 1}`,
  }));

  const layout: Partial<Layout> = {
    title: "Index Embedding",
    titlefont: { size: 20 },
    width: 1000,
    height: 800,
    legend: {
      x: 1.01,
      y: 0.5,
      title: { text: "Clusters", font: { size: 16 } },
      itemsizing: "constant",
      traceorder: "normal",
      font: { size: 16 },
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      ticks: "",
      tickfont: { color: "rgba(0,0,0,0)" },
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      ticks: "",
      tickfont: { color: "rgba(0,0,0,0)" },
    },
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 150,
      pad: 4,
    },
  };

  return <Plot data={traces} layout={layout} />;
};

export default PlotlyScatterEmbedding;
