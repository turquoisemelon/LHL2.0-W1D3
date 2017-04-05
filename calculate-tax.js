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

function calculateSalesTax(salesData, taxRates) {
  var resultObj = {};
  for (var key in salesData) {
    var salesByCompany = salesData[key].sales;
    var companyTotalSales = calculateSales(salesByCompany);
    var companyTotalTaxes = calculateTax(salesData[key], taxRates);
    if (!resultObj[salesData[key].name]) {
      resultObj[salesData[key].name] = {"totalSales": companyTotalSales, "totalTaxes": companyTotalTaxes};
    } else {
      resultObj[salesData[key].name]["totalSales"] += companyTotalSales;
      resultObj[salesData[key].name]["totalTaxes"] += companyTotalTaxes;
    }
  }
  return resultObj;
}

function calculateSales (salesDataArr) {
    var totalSales = 0;
    for (var i = 0; i < salesDataArr.length; i++) {
      totalSales += salesDataArr[i];
    }
    return totalSales;
}

function calculateTax(salesElement, taxRate) {
    var getProvince = salesElement["province"];
    var getSalesArray = salesElement.sales;
    var totalSalesWithTaxes = calculateSales(getSalesArray);
    var taxesOnTotalSales = totalSalesWithTaxes * taxRate[getProvince];
    return taxesOnTotalSales;
    console.log(taxesOnTotalSales);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
