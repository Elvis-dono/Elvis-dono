
    const observer= new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    });
    document.querySelectorAll('.hidden','.hidden-left','.hidden-right').forEach(el(observer.observe(el)));
