const shareButton = document.querySelector('.share');
const imgArrow = shareButton.querySelector('#arrow')
const shareBox = document.querySelector('.share-box');
const authorBox = document.querySelector('.author-box');

console.log(window.innerWidth)

shareButton.addEventListener('click', (e)=> {
    e.preventDefault();
    shareButton.classList.toggle('active');
    if(window.innerWidth <= 425){
        if(shareButton.classList.contains('active')){
            shareButton.style.background = '#6d7f97';
            imgArrow.src = '/images/share-white.png'
            authorBox.style.background = '#48556a'
            shareBox.style.opacity = '1';
            shareBox.style.boxShadow = 'none';
        }else{
            shareButton.style.background = '#ecf2f8'
            imgArrow.src = '/images/icon-share.svg'
            authorBox.style.background = 'white'
            shareBox.style.opacity = '0';
        }
    }else{
        if(shareButton.classList.contains('active')){
            shareButton.style.background = '#48556a';
            imgArrow.src = '/images/share-white.png'
            authorBox.style.background = 'white'
            shareBox.style.opacity = '1';
                
        }else{
            shareButton.style.background = '#ecf2f8'
            imgArrow.src = '/images/icon-share.svg'
            shareBox.style.opacity = '0';
            authorBox.style.background = 'white'
        }
    }
    
    
})

