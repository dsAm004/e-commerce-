const buttons = document.querySelectorAll(".product button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
