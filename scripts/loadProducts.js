document.addEventListener("DOMContentLoaded", function () {
    fetch("../data/products.json")
        .then((response) => response.json())
        .then((products) => {
            products.forEach((product) => {
                addProduct(product.name, product.price, product.imageUrl);
            });
        })
        .catch((error) =>
            console.error("Error al cargar los productos:", error)
        );
});
