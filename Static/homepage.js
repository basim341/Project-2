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