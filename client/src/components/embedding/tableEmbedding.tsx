// Import libraries

import React, { useEffect, useState } from 'react';

interface SummaryData {
  Cluster_Num: string;
  Summary: string;
}

const TableEmbedding = () => {
  const [summaryData, setSummaryData] = useState<SummaryData[]>([]);

  useEffect(() => {
    const fetchSummaryData = async () => {
      const response = await fetch('/data/summary.json');
      const jsonData: SummaryData[] = await response.json();
      setSummaryData(jsonData);
    };

    fetchSummaryData();
  }, []);

  return (
      <div>
        <h2>Summary Data (using Davinci Model)</h2>
        <table>
          <thead>
            <tr>
              <th>Cluster Number</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((data, index) => (
              <tr key={index}>
                <td>{data.Cluster_Num}</td>
                <td>{data.Summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default TableEmbedding;
