import CallList from "@/components/CallList";
import React from "react";

const Upcomming = () => {
  return (
    <section className="flex size-full flex-col text-white">
      <h1 className="text-3xl font-bold">Upcomming</h1>
      <CallList type="upcomming" />
    </section>
  );
};

export default Upcomming;
