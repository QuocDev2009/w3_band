const buyTicketList = document.querySelectorAll('.buy-ticket')
const modalElement = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const closeElements = document.getElementsByClassName('close-board')
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
modalElement.addEventListener('click', turnOfBoard)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})