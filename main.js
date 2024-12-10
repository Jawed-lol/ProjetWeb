function accord(){
    const accordions=document.querySelectorAll(".accordion");
    accordions.forEach(accordion =>{
            accordion.addEventListener("mouseover",() => {
                    accordions.forEach(acc => acc.className.remove("expand"));
                    accordion.className.add("expand");
                }
            )    
            accordion.addEventListener("mouseleave",()=>{
                accordion.className.remove("expand");
                accordions[0].className.add("expand");        
            }) 
        }   
    );

}
accord();