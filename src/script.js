function handleTipsList(sybol01, sybol02, list, cb){
    let articles = document.querySelectorAll(`${list} li`)
    function resetArticles(articles){

        articles.forEach(article2=>{
            article2.querySelector("p").classList.add("opacity0", "displayNone")
            article2.querySelector("i").classList.replace(sybol02, sybol01)
        })
    }   
    function toggleEv(ev, articles){
        if(ev.target.querySelector("p").classList.contains("opacity0", "displayNone")){
            resetArticles(articles)
            ev.target.querySelector("i").classList.replace(sybol01,sybol02)
            ev.target.querySelector("p").classList.remove("displayNone")
            setTimeout(()=> ev.target.querySelector("p").classList.remove("opacity0"), 200)
            cb? cb(ev) : 0
        }else{
            resetArticles(articles)
            ev.target.querySelector("i").classList.replace(sybol02, sybol01)
            ev.target.querySelector("p").classList.add("opacity0", "displayNone")        
        }
    }
    articles.forEach(article=> article.addEventListener("click", ev=> toggleEv(ev, articles)))
}


function handleListArticles(){
    let images = ["png.webp", "LandingPages-Desktop-03-B-HighlightProd.webp", "LandingPages-Desktop-03-C-FreeDownload.webp", "LandingPages-Desktop-03-D-Contest__1_.webp"]
    let image_container = document.querySelector(".models_page-content .models_page-part02 img")
    handleTipsList("bx-chevron-down", "bx-chevron-up", "#models_page-list", (ev)=>{
        image_container.src = `/assets/images/${images[ev.target.id]}`
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    handleListArticles()
    handleTipsList("bx-plus-medical", "bx-dots-horizontal-rounded", "#common_questions-list")
})
