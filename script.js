const alkohol = document.querySelectorAll("li");
const polcon = document.getElementById("polcon");
const boltban = document.getElementById("boltban");

alkohol.forEach(element => {
    element.addEventListener("click", function() {
 
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        } else {
            element.classList.add("active");
        }

        
    }); 
});



alkohol.forEach(element => {

    element.addEventListener("dblclick", function() {
    })
});



