const btnStart = document.querySelector('.start')
const btnClick = document.querySelector('.click')
const timerSpan = document.querySelector('.timer')


let score = 0

btnStart.addEventListener('click', ()=>{
    timer()
    btnClick.addEventListener('click', ()=>{
        score++
    })

    setTimeout(() => {
        btnClick.setAttribute('disabled', true)
        document.querySelector('body').innerHTML += createModal(score)
        closeModal()
        const result = document.querySelector('.score__item')
        result.textContent = score
    }, 10000);
})

const timer = () =>{
   let number = 9
   
   setInterval(() => {
       if (number >=0) {
        timerSpan.textContent = number
        number--  
       }
   }, 1000);
}

const createModal = score =>{
    return `
        <div class="modal__wrapper">
            <div class="modal">
                <div class="modal__text">Вітаю. Ви отримали ${score} кліків</div>
                <button class="okey">Okey</button>
            </div>
        </div>
    `
}


const closeModal = () =>{
    const btnModalClose = document.querySelector('.okey')
    btnModalClose.addEventListener('click', () =>{
        document.querySelector('.modal__wrapper').remove()
        
    })
}