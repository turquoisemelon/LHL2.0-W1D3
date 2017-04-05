var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateTax(sales, taxRate) {
  for (var elem in sales) {
    var getProvince = sales[elem]["province"];
    var getSalesArray = sales[elem].sales;
    var totalSalesWithTaxes = calculateSales(getSalesArray);
    var taxesOnTotalSales = totalSalesWithTaxes * taxRate[getProvince];
    // console.log(taxesOnTotalSales);
  }
  return taxesOnTotalSales;
}

function calculateSales (salesData) {
    var totalSales = 0;
    for (var i = 0; i < salesData.length; i++) {
      totalSales += salesData[i];
    }
    return totalSales;
}

a = calculateTax(companySalesData, salesTaxRates);

console.log(a);
