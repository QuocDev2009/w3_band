const header = document.querySelector('#header')
const menuButton = document.querySelector('#menu-button')
const headerButtons = document.querySelectorAll('#navigation li')
const subnav = document.querySelector('.subnav')
const headerHeight =  header.clientHeight
const bodyElement = document.querySelector('body')
menuButton.addEventListener('click', (e)=>{
    if (header.clientHeight === headerHeight){
        header.style.height = 'auto'
    }
    else{
        header.style.height = '46px'
    }
})
// handle header buttons
for (var i= 0 ; i<headerButtons.length; i++){
    var menuItems = headerButtons[i]
    menuItems.addEventListener('click', function(e){
        var isParent = this.getAttribute('isParent')
        if (isParent!=='true'){
            header.style.height = `${headerHeight}px`
        }
    })
}