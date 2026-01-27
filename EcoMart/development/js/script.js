function searchbar(){
    let input=document.getElementById("searchInput").value.toLowerCase();
    let products=document.querySelectorAll(".eco-card");

    for(let i = 0; i < products.length; i++){
        let productName = products[i].getAttribute("data-name").toLowerCase();
        if(productName.includes(input)){
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}