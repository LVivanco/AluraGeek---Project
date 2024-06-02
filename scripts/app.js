document
    .getElementById("productForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("productName").value;
        const price = document.getElementById("productPrice").value;
        const imageUrl = document.getElementById("productImageUrl").value;

        if (name && price && imageUrl) {
            addProduct(name, price, imageUrl);
            document.getElementById("productForm").reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

function addProduct(name, price, imageUrl) {
    const productList = document.getElementById("productList");
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p>S/. ${price}</p>
        <button onclick="removeProduct(this)">Eliminar</button>
    `;
    productList.appendChild(productCard);
}

function removeProduct(button) {
    const productCard = button.parentElement;
    productCard.remove();
}
