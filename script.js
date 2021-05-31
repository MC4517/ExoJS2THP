// F1

document.querySelector('footer').addEventListener('click',function(e) { 
    console.log("clique");
});

// F1.bis

var f = document.querySelector('footer');
    f.ondblclick = function(){
        alert(clicks); 
     };

// F2

var navbarHeader = document.querySelector('#navbarHeader');

var toggle = document.querySelector('.navbar-toggler');

toggle.addEventListener('click',toggleHide)

function toggleHide(){
    navbarHeader.classList.toggle("collapse")
}

toggleHide()

// F3

textColor = document.querySelector('.card-text');
cardButton = document.querySelector('.card .btn-outline-secondary');

function changeColor(){
    textColor.classList.add('text-danger');
 }

cardButton.addEventListener('click', changeColor)

// F4


let btnSecondCard = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
let textSecondCard = document.querySelectorAll('.card')[1].querySelector('.card-text');

btnSecondCard.addEventListener('click', function() {
    if (textSecondCard.style.color ===  'green') {
        textSecondCard.style.color = 'black';
    } else {
         textSecondCard.style.color = 'green';
    } 
})

// F5

let showNavbar = document.querySelector('header');
let linkCdn = document.querySelector('link');

function deleteCdn() {
    if (linkCdn.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
        linkCdn.href = '';
    } else {
        linkCdn.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    }
} 


showNavbar.addEventListener('dblclick', deleteCdn)


// F6 

let btnsView = document.querySelectorAll('.btn-success');
let cardTexts = document.querySelectorAll('.card-text')
let cardImgs = document.querySelectorAll('.card-img-top');

for (let i = 0; i < btnsView.length; i ++){
    let btn = btnsView[i];

btn.addEventListener('mouseover', function() {
        if (cardTexts[i].style.display != "none") {

            cardTexts[i].style.display = 'none';
            cardImgs[i].style.width = '20%';
   
            } else {
                cardTexts[i].style.display = 'initial';
            cardImgs[i].style.width = "100%";
            
            }
        });
    }
    

// F7 & F8

let greyBtn = document.querySelector('.btn-secondary');
let noeudParent = document.querySelectorAll('.row')[1];
let btnLink = document.querySelectorAll('a')[4]


btnLink.addEventListener('mouseover', function() {
    btnLink.removeAttribute('href');
})

btnLink.addEventListener('click', function() {
    noeudParent.insertBefore(noeudParent.firstChild, noeudParent.lastChild)
})


greyBtn.addEventListener('click', function() {
    noeudParent.insertBefore(noeudParent.lastChild, noeudParent.firstChild)
})

// F9 

let jsEvent = document.querySelector('.navbar-brand')
let body = document.querySelector('body')

jsEvent.addEventListener('keydown', (press) => {
    if (press.key == "a")
      body.setAttribute('class', 'col-4')

    else if (press.key == "y")
       body.setAttribute("class",'col-4 offset-4')

    else if (press.key == "p")
    body.setAttribute("class",'col-4 offset-8')

    else if (press.key == "b")
    body.removeAttribute("class")

    
  });





