const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id || !products[id]) {
  alert("Product not found");
} else {
  const p = products[id];

  document.getElementById("productName").innerText = p.name;
  document.getElementById("productDesc").innerText = p.shortDesc;
  document.getElementById("productPrice").innerText = p.price;
  document.getElementById("productImage").src = p.image;

  document.getElementById("orderBtn").onclick = () => {
    const msg = `I want to order ${p.name} for ${p.price}`;
    window.open(
      `https://wa.me/923194619377?text=${encodeURIComponent(msg)}`
    );
  };
}
