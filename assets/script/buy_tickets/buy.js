const buyTicketList = document.querySelectorAll('.buy-ticket')
const modalElement = document.querySelector('.modal')
const closeElements = document.getElementsByClassName('close-board')
console.log(closeElements)
function turnOnBoard(){
    modalElement.style.display = 'flex'
}
function turnOfBoard(){
    modalElement.style.display = 'none'
}
for (var element of buyTicketList){
    element.addEventListener('click', turnOnBoard)
}
for (var element of closeElements){
    element.addEventListener('click', turnOfBoard)
}