let x = document.querySelectorAll('.product-discountedPrice')

let priceYouWant = 501;

for(i in x){
	const disountedPriceStr = x[i].innerText && x[i].innerText !== 'undefined' ? x[i].innerText.replace('Rs. ','') : null;
	const discountedPriceNumber = disountedPriceStr && disountedPriceStr !== 'undefined' ? parseInt(disountedPriceStr) : null;
	discountedPriceNumber < priceYouWant && discountedPriceNumber !== null ? console.log(discountedPriceNumber) : null
}