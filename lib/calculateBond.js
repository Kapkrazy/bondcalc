function calculateBond(principal, rate, years, deposit) {
    rate = rate / 100;
    const monthlyRate = rate / 12;
    const numberOfPayments = years * 12;
  
    const loanAmount = principal - deposit;
  
    if (loanAmount <= 0 || rate === 0) {
      return {
        monthlyRepayment: '0.00',
        totalRepayment: '0.00',
      };
    }
  
    const monthlyRepayment =
      loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  
    const totalRepayment = monthlyRepayment * numberOfPayments;
  
    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    };
  }
  
  export default calculateBond;
  