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

const DemoGraph: React.FC<{}> = () => {
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/graph.json");
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
      <SigmaContainer
        graph={graph}
        style={{ height: "50rem", width: "50rem" }}
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
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ height: 1000, width: 1000 }} />
        </ControlsContainer>
      </SigmaContainer>
    );
  } else {
    return <></>;
  }
};

export default DemoGraph;
