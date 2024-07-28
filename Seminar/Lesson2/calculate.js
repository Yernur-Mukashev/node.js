const numberPrecision = require("number-precision");

function calculateResultSum(purchases, discount) {
	let total = purchases.reduce(
		(acc, purchases) => numberPrecision.plus(acc, purchases),
		0
	);

	total = numberPrecision.times(total, discount); // применяем скидку
	return total;
}

module.exports = { calculateResultSum };
