'use client'
import React from "react";
import { useState } from "react";
import calculateBond  from "@/lib/calculateBond";

export default function CalculatorForm() {
  const [formData, setFormData] = useState({
    principal: '',
    rate: '',
    years: '',
    deposit: '',
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { principal, rate, years, deposit } = formData;
    const result = calculateBond(
      parseFloat(principal),
      parseFloat(rate),
      parseFloat(years),
      parseFloat(deposit || 0)
    );
    setResults(result);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">

      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="principal">Purchase Price(Including VAT*)</label>
        <input
          type="number"
          name="principal"
          placeholder="Purchase Price"
          value={formData.principal}
          id="principal"
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label htmlFor="rate">Interest Rate</label>
        <input
          type="number"
          name="rate"
          id="rate"
          placeholder="Interest Rate (%)"
          value={formData.rate}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label htmlFor="years">Years to Repay</label>
        <input
          type="number"
          name="years"
          id="years"
          placeholder="Years to Repay"
          value={formData.years}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label htmlFor="deposit">Deposit (optional)</label>
        <input
          type="number"
          name="deposit"
          id="deposit"
          placeholder="Deposit (optional)"
          value={formData.deposit}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </form>

      {results && (
        <div className="mt-6 bg-green-700 text-white p-4 rounded">
          <p><strong>Monthly Repayment:</strong> R {results.monthlyRepayment}</p>
          <p><strong>Total Repayment:</strong> R {results.totalRepayment}</p>
        </div>
      )}
    </div>
  );
}


