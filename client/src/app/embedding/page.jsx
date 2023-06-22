"use client";
import React from "react";
import dynamic from "next/dynamic";

const PlotlyIndexEmbedding = dynamic(
  () => import("@/components/embedding/plotlyIndexEmbedding"),
  { ssr: false } // This line is important. It disables server-side render for this component.
);

const SigmaDemoGraph = dynamic(
  () => import("@/components/embedding/sigmaDemoGraph"),
  { ssr: false } // This line is important. It disables server-side render for this component.
);

// Create a new Next.js page component
export default function EmbeddingPage() {
  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <PlotlyIndexEmbedding />
      <div>
        <SigmaDemoGraph />
      </div>
    </section>
  );
}
