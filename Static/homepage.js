// alert(`Note: This is an imaginary website and any stated facts or figures are not true`)


 let sidebarbtn =    ()  => {   
 let btn = document.getElementById(`m-container`).style
 if(btn.display != `flex`){
 btn.display =`flex`
 btn.transition = `0.5s all ease`
 }
 else{
    btn.display = `none`
 }
 }

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