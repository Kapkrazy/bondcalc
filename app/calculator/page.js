import CalculatorForm from "@/components/CalculatorForm";
import React from "react";
import Header from "@/components/Header";

function page() {
  return (
    <>
      <section className="flex flex-col items-center text-center gap-3">
        <Header />
      </section>
      <section className="flex flex-col gap-3 mt-10">
        <CalculatorForm />
      </section>
    </>
  );
}

export default page;
