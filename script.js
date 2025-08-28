let heartIcon = document.getElementsByClassName('fa-heart')

for(let heart of heartIcon){
    heart.addEventListener('click', function(){
        let heartCount = Number(document.getElementById('heart-count').innerText);
        let finalCount = heartCount + 1;
        document.getElementById('heart-count').innerText = finalCount; 
    })
}

