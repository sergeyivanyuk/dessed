
        let box=document.querySelectorAll('.projects-item');
        let btn=document.querySelector('.project-btn');
        for (let i=6;i<box.length;i++) {
            box[i].style.display = "none";
        }
        let countD = 6
        btn.addEventListener('click', () => {
            countD += 6;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
        })