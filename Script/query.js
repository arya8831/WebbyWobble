const btn = document.getElementById("button");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let ref_key = document.getElementById("reference_key").value;
    console.log(name, ref_key);
    let output = [name, ' ', ref_key].join('');
    document.getElementById("output-area").append(output.toUpperCase());
    let button = document.getElementById("button");
    button.disabled = true;
    button.remove()
});