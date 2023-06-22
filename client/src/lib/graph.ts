import { getRandomColor } from "./plot";

export const generateGraphData = (
  numNeighborhoods: number,
  numNodesPerNeighborhood: number
) => {
  const nodes = [];
  const edges = [];

  // Generate nodes and edges
  for (let i = 0; i < numNeighborhoods; i++) {
    const neighborhoodColor = getRandomColor(); // Generate a random color for the neighborhood

    for (let j = 0; j < numNodesPerNeighborhood; j++) {
      const nodeId = `${i}-${j}`;
      nodes.push({
        id: nodeId,
        label: `Node ${nodeId}`,
        color: neighborhoodColor,
        x: Math.random(),
        y: Math.random(),
        size: Math.random(),
      });

      if (j > 0) {
        // Connect each node to the previous node in the same neighborhood
        edges.push({
          id: `e${nodeId}`,
          source: `${i}-${j - 1}`,
          target: nodeId,
        });
      }
    }
  }

  return { nodes, edges };
};
