import "./style.css"

const accordions = document.querySelectorAll(`.accordion`)

accordions.forEach(function(accordion){
  accordion.addEventListener(`click`, function(){

    const accordionBody = accordion.querySelector(`.accordion-body`);

    accordionBody.classList.contains(`accordion-active`);

    if( accordionBody.classList.contains(`accordion-active`)){
        accordionBody.classList.remove(`accordion-active`)
  }else{
    accordionBody.classList.add(`accordion-active`);
  }

  accordions.forEach(function(singleAccordion){
    if(singleAccordion !== accordion){
       singleAccordion.querySelector(`.accordion-body`).classList.remove(`.accordion-active`)
    };
  });
 });
})