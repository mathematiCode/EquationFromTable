let before = document.getElementById("before");
let after = document.getElementById("after");

document.getElementById("additive").addEventListener("click", function () {
    before.innerHTML = ""; // Clear previous content
    after.innerHTML = ""; // Clear previous content
    katex.render("y = x + ", before);
});

document.getElementById("multiplicative").addEventListener("click", function () {
    before.innerHTML = ""; // Clear previous content
    after.innerHTML = ""; // Clear previous content
    katex.render("y=", before);
    katex.render("x", after);
});