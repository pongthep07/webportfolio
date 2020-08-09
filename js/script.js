window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0")
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


/* portfolio item */

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;
      

      // เพิ่ม ลบ active เมื่อกดปุ่ม
      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active")
            this.classList.add("active");

            const filterValue=this.getAttribute("data-filter");
            // show hide port
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide")
                    portfolioItems[k].classList.add("show")
                }
                else{
                    portfolioItems[k].classList.remove("show")
                    portfolioItems[k].classList.add("hide")
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide")
                    portfolioItems[k].classList.add("show")
                }
            }
          })
      }

// lightbox portfolio

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex=0;

      for (let i = 0; i <totalPortfolioItem; i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex = i
            changeItem();
            toggleLightbox();
            
        })
      }
      function nextItem(){
          if(itemIndex === totalPortfolioItem-1){
              itemIndex=0;
          }
          else{
              itemIndex++
          }
          changeItem();
/*           console.log(itemIndex); */
      }
      function prevItem(){
        if(itemIndex === 0){
            itemIndex = totalPortfolioItem-1;
        }
        else{
            itemIndex--
        }
        changeItem();
/*           console.log(itemIndex); */
    }
      function toggleLightbox(){
          lightbox.classList.toggle("open");
      }
      function changeItem(){
          imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
          lightboxImg.src=imgSrc;
          lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML = (itemIndex+1) + "of" + totalPortfolioItem;
/*           console.log(imgSrc); */
      }

// close lightbox

lightbox.addEventListener("click",function(event){
    if(event.target === lightboxClose || event.target === lightbox ){
        toggleLightbox();
    }
/*     console.log(event.target) */
})


// navbar

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavlist = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i = 0; i<totalNavlist; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click" , function(){

            for(let j=0; j<totalNavlist; j++ ){
                allSection[j].classList.remove("back-section");
            }
            for(let j=0; j<totalNavlist; j++ ){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            /* console.log(this); */

            showSection(this);

            if(window.innerWidth < 1200){
                asidSectionTogglerBtn();
            }
        })
    }

    function showSection(element){
        for (let i=0; i< totalSection; i++){
            allSection[i].classList.remove("active")
        }
       const target=element.getAttribute("href").split("#")[1];

       document.querySelector("#" + target) .classList.add("active");
             /* console.log(target); */
    }


    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",() =>{
        asidSectionTogglerBtn();
    })
    function asidSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i=0; i< totalSection; i++){
            allSection[i].classList.toggle("open")
        }
    }
    