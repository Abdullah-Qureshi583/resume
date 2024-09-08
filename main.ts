let hamburger = document.querySelector(".hamburger");

hamburger?.addEventListener("click",()=>{
    let r:any = document.querySelectorAll(".navUl")
    r.classList.add("displayUl")
    console.log(r)
    console.log("clicked!")
})