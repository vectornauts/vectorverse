import React, { useEffect } from "react";
import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  NOverlap,
  //@ts-ignore
} from "react-sigma";
import { generateGraphData } from "@/lib/graph";

export default function SigmaGraph() {
  const { nodes, edges } = generateGraphData(10, 10);

  // Handle sigma instance on mount and cleanup on unmount
  useEffect(() => {
    const sigmaInstance = new Sigma({
      graph: { nodes, edges },
      container: "sigma-container",
      settings: { defaultNodeColor: "#ec5148" },
    });

    return () => {
      sigmaInstance.kill();
    };
  }, [nodes, edges]);

  return (
    <div id="sigma-container">
      <Sigma graph={{ nodes, edges }} style={{ width: 1000, height: 1000 }}>
        <RandomizeNodePositions />
        <RelativeSize initialSize={15} />
        <NOverlap
          gridSize={10}
          speed={10}
          maxIterations={500}
          easing="quadraticInOut"
        />
      </Sigma>
    </div>
  );
}
