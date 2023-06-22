// Import libraries
import React from "react";
import Plot from "react-plotly.js";

const generateData = (): { x: number[]; y: number[] }[] => {
  const classes = 10;
  const pointsPerClass = 1000;

  return Array.from({ length: classes }, (_, i) => ({
    x: Array.from({ length: pointsPerClass }, (_, j) => j),
    y: Array.from({ length: pointsPerClass }, () => Math.random() + i), // add 'i' to shift each class up
  }));
};

const PlotlyChart: React.FC = () => {
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
    marker: { color: plotlyColorPalette[i % plotlyColorPalette.length] }, // cycle through colors
    name: `Class ${i + 1}`,
  }));

  return (
    <Plot
      data={traces}
      layout={{ width: 500, height: 300, title: "A Fancy Plot" }}
    />
  );
};

export default PlotlyChart;
