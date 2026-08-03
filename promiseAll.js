// const p1 = Promise.resolve("Product");
// const p2 = Promise.resolve("Price");
// const p3 = Promise.resolve("Reviews");

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//If One Promise Fails

const p1 = Promise.resolve("Product");

const p2 = Promise.reject("Network Error");

const p3 = Promise.resolve("Offer");

Promise.all([p1, p2, p3])
.catch((err) => {
    console.log(err);
});



Promise.all([
    fetchProducts(),
    fetchCategories(),
    fetchOffers(),
    fetchBanners()
])
.then(([products, categories, offers, banners]) => {

    console.log(products);
    console.log(categories);
    console.log(offers);
    console.log(banners);

})
.catch((err) => {
    console.log(err);
});