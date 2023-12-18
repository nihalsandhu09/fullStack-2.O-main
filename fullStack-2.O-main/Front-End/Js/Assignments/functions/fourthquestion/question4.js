// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.
function calculateTax() {
    // Closure defining tax rates based on income ranges
    const taxRates = [
      { minIncome: 0, maxIncome: 10000, rate: 0.1 },
      { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
      { minIncome: 50001, maxIncome: 100000, rate: 0.3 },
      { minIncome: 100001, maxIncome: Infinity, rate: 0.4 }
    ];
  
    // Inner function to calculate tax based on income
    return function(income) {
      let tax = 0;
      for (let i = 0; i < taxRates.length; i++) {
        if (income > taxRates[i].minIncome && income <= taxRates[i].maxIncome) {
          tax = (income - taxRates[i].minIncome) * taxRates[i].rate;
          break;
        }
      }
      return tax;
    };
  }
  
  // Create a tax calculator based on income ranges
  const calculateTaxForIncome = calculateTax();
  
  // Test with various incomes
  console.log(calculateTaxForIncome(5000));   // Example income: $5000
  console.log(calculateTaxForIncome(20000));  // Example income: $20000
  console.log(calculateTaxForIncome(75000));  // Example income: $75000
  console.log(calculateTaxForIncome(150000)); // Example income: $150000
  