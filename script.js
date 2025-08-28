let heartIcon = document.getElementsByClassName('fa-heart');

for(let heart of heartIcon){
    heart.addEventListener('click', function(){
        let heartCount = Number(document.getElementById('heart-count').innerText);
        let finalCount = heartCount + 1;
        document.getElementById('heart-count').innerText = finalCount; 
    })
}

let copyBtn = document.getElementsByClassName('copy-btn');

for(let copies of copyBtn){
    copies.addEventListener('click', function(){    
        let callNumber = copies.parentNode.parentNode.children[2].children[0].innerText;
        alert('The number has been copied:' + ' ' + callNumber);
        navigator.clipboard.writeText(callNumber);
        let copyCount = Number(document.getElementById('copy-count').innerText);
        let finalCount = copyCount + 1;
        document.getElementById('copy-count').innerText = finalCount;
    })
}

