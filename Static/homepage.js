// alert(`Note: This is an imaginary website and any stated facts or figures are not true`)

    const btn = document.querySelector(`.btn`)
    const sidebar = document.querySelector(`.sidebar`)
    btn.addEventListener(`click`, () => {
        btn.classList.toggle(`active`)
        sidebar.classList.toggle(`active`)

    }
    
    )

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) [
            entry.target.classList.add(`show`)
        ]
        else {
            entry.target.classList.remove(`show`)
        }
    })
 })

 const hiddenelements = document.querySelectorAll(`.hidden`) 
 hiddenelements.forEach((el) => observer.observe(el));

 const btn1 =  () => {
    let info = document.getElementById(`sidebar1`).style
    if (info.transform != `translateY(150%)`){
        info.transition = `all 0.5s ease-in-out`       
        info.transform =`translateY(150%)` 
    
    }
        else {
                info.transform = `translateY(-150%)`
        }
    }
