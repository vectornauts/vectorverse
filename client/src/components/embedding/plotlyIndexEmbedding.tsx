// Import libraries
import React from "react";
import Plot from "react-plotly.js";
import { boxMullerRandom } from "@/lib/math";
import { Layout } from "plotly.js";
// import fs from 'fs';
import data from "./dataframe.json";

// const generateData = (): { x: number[]; y: number[]; color: string[]; relations: string[] }[] => {
//   const grouped: { [key: string]: { x: number[]; y: number[]; color: string[]; relations: string[]} } = {};

//   data.forEach((row: { x: string, y: string, community: string, color: string, relations: string }) => {
//     if (!grouped[row.community]) {
//       grouped[row.community] = { x: [], y: [], color: [], relations: []};
//     }

//     grouped[row.community].x.push(Number(row.x));
//     grouped[row.community].y.push(Number(row.y));
//     grouped[row.community].color.push(row.color);
//     grouped[row.community].relations.push(row.relations); 
//     // grouped[row.community].Summary.push(row.Summary); 
//   });

//   return Object.values(grouped);
// };


const generateData = (): { x: number[]; y: number[]; color: string[]; relations: string[]; Summary: string[] }[] => {
  const grouped: { [key: string]: { x: number[]; y: number[]; color: string[]; relations: string[]; Summary: string[] } } = {};

  data.forEach((row: { x: string, y: string, community: string, color: string, relations: string, Summary: string }) => {
    if (!grouped[row.community]) {
      grouped[row.community] = { x: [], y: [], color: [], relations: [], Summary: [] };
    }

    grouped[row.community].x.push(Number(row.x));
    grouped[row.community].y.push(Number(row.y));
    grouped[row.community].color.push(row.color);
    grouped[row.community].relations.push(row.relations); 
    grouped[row.community].Summary.push(row.Summary); 
  });

  return Object.values(grouped);
};


const PlotlyScatterEmbedding: React.FC = () => {
  const classData = generateData();

  const traces = classData.map((data, i) => ({
    x: data.x,
    y: data.y,

    // relations: data.relations,
    type: "scattergl" as const, // Specify type as a constant
    mode: "markers" as const,
    marker: {
      // color: plotlyColorPalette[i % plotlyColorPalette.length],
      color : data.color,
      size: 1,
      opacity: 0.75,
    }, 
    name: `Cluster ${i + 1} `,

    hovertemplate: `x: %{x}<br>y: %{y}<br>Cluster: ${i+1}<br>Relations: ${data.relations[0]} <br> `,
    // text: data.relations.map(rel => rel.toString()).join(', '),
  }));

  const layout: Partial<Layout> = {
    title: "Pinecone Index Embedding",
    autosize: true,
    titlefont: { size: 20 },
    // width: 1000,
    // height: 800,
    legend: {
      x: 1.01,
      y: 0.5,
      title: { text: "Clusters", font: { size: 16 } },
      itemsizing: "constant",
      traceorder: "normal",
      font: { size: 10 },
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
      t: 75,
      pad: 4,
    },
  };


  return <Plot data={traces} layout={layout} useResizeHandler={true} style={{width: "80%", height: "40rem"}} />;
  
};


export default PlotlyScatterEmbedding;


