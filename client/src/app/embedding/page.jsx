"use client";
import React from "react";
import dynamic from "next/dynamic";

const PlotlyIndexEmbedding = dynamic(
  () => import("@/components/embedding/plotlyIndexEmbedding"),
  { ssr: false } // This line is important. It disables server-side render for this component.
);

const TableEmbedding = dynamic(
  () => import("@/components/embedding/tableEmbedding"),
  { ssr: false } // This line is important. It disables server-side render for this component.
);

const SigmaDemoGraph = dynamic(
  () => import("@/components/embedding/sigmaDemoGraph"),
  { ssr: false } // This line is important. It disables server-side render for this component.
);

// Create a new Next.js page component
export default function EmbeddingPage() {
  return (
    <section className="">
      <div class="grid grid-flow-row justify-items-center">
        <div className="border-2 rounded w-3/4 grid grid-flow-row justify-items-center"><PlotlyIndexEmbedding className='bg-blue-500' /></div>
        <div className="divider w-3/4"></div>
        <div className="m-5 w-3/4"><SigmaDemoGraph/></div>
        <div className="divider w-3/4 pt-5"></div>
        <div className="border-2 rounded w-3/4"><TableEmbedding /></div>
      </div>
    </section>
  );
}
