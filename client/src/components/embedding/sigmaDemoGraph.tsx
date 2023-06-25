import React, { useEffect, useState } from "react";
import Graph from "graphology";

import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
import {
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  FullScreenControl,
  SearchControl,
  //@ts-ignore
} from "@react-sigma/core";
//@ts-ignore
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";


// interface NodeData {
//   label: string;
//   x: number;
//   y: number;
//   id: string;
//   attributes: {
//     community: string;
//   };
//   color: string;
//   size: number;
// }

// interface GraphData {
//   nodes: NodeData[];
// }

const DemoGraph: React.FC<{}> = () => {
  // const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/sentbert50_converted_wo_missing.json");
      // const response = await fetch("/data/graph.json");

      const jsonData = await response.json();
      console.log(jsonData);
      setGraphData(jsonData);
    };


    fetchData();
  }, []);


  //@ts-ignore
  const graph = graphData ? Graph.from(graphData) : undefined;

  if (graph) {
    return (
      <div>
        <h1>GRAPH</h1>
      <SigmaContainer
        className="border-2 rounded"
        graph={graph}
        style={{ height: "40rem", width: "100%" }}
        settings={{
          nodeProgramClasses: { image: getNodeProgramImage() },
          defaultNodeType: "image",
          defaultEdgeType: "arrow",
          labelDensity: 0.07,
          labelGridCellSize: 60,
          labelRenderedSizeThreshold: 15,
          labelFont: "Lato, sans-serif",
          zIndex: true,
        }}
      >
        <div className="divider"></div>
        <ControlsContainer className="flex gap-2">
          <ZoomControl className="mt-1" />
          <FullScreenControl className="mt-1" />
          <LayoutForceAtlas2Control className="mt-1"/>
          <ControlsContainer >
            <SearchControl className="border rounded border-2 px-2" />
          </ControlsContainer>
        </ControlsContainer>
        <div className="divider pb-8"></div>
        
      </SigmaContainer>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DemoGraph;