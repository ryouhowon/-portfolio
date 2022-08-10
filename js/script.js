const photoArr = [  ["Aisle.png", "[Aisle]", "HTML5 / CSS / (publish)", "publish", " https://ryouhowon.github.io/Aisle/"],
["B&O.png", "[B&O]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/B-O/"],
["CASHMERE.png", "[CASHMERE]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/cashemere/"],
["Origin.png", "[Origin]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/Origin/"],
["FilmMakers.png", "[FilmMakers]", "HTML5 / CSS / Jquery / (publish)", "publish", "https://ryouhowon.github.io/Filmmakers/"],
["Kuliner.png", "[kuliner]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/Kuliner/"],
["website.png", "[website]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/website/"],
["Oclass.png", "[oclass]", "HTML5 / CSS / Jquery / Javacaript / PHP (publish)", "publish", "https://ryouhowon.github.io/oclass/"],
["Cakecious.png", "[Cakecious]", "HTML5 / CSS / (publish)", "publish", "https://ryouhowon.github.io/cakehouse/"],
["Willow.png", "[Willow]", "HTML5 / CSS / Javacaript / (develop)", "develop", "https://ryouhowon.github.io/WILLOW/"],
  
];

const sectionSpace = document.querySelector("#grid_system");
let sectionCont = "";

for(v of photoArr){
    sectionCont += `
        <article class = "${v[3]}">
            <div class="photo">
                <img src="./img/${v[0]}" alt="">
                <h3>${v[1]}</h3>
                <p>${v[2]}</p>
                <a href="${v[4]}">Detail_view</a>
            </div>
        </article>
    ` 
}

sectionSpace.innerHTML = sectionCont;

let grid;
const timeOut = setTimeout(() => {
    grid = new Isotope("#grid_system", {
        itemSelector : "article",
        transitionDuration : "0.5s"
    });
}, 500);


const sortBtns = document.querySelectorAll(".sort_btn li");
console.log(sortBtns);

for(v of sortBtns){
    v.addEventListener("click", (e) => {
        e.preventDefault();
        const dataSort = e.currentTarget.querySelector("a").getAttribute("data-sort");
        grid.arrange({
            filter : dataSort
        });

       
        for(v of sortBtns){
            v.classList.remove("active");
        }

        e.currentTarget.classList.add("active");

    });  
}

const $arrow = document.querySelector("header span");
const $header = document.querySelector("header");
console.log($arrow);

$arrow.addEventListener("click", () => {
    const isActive = $header.closest("header").classList.contains("active");
    if(!isActive){
        $arrow.closest("header").classList.add("active");
    }else{
        $arrow.closest("header").classList.remove("active");
    }

    
});
