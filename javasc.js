import { randint,shuffle,Qustion } from "./scripts.js"


let div_ans = document.querySelector('.ans')
let ans_arr = div_ans.querySelectorAll('div')
let count_qw = 0



let qws = new Qustion()
qws.display()
let flug = true
for(let ans of ans_arr){
    ans.addEventListener('click',function(){
        if (flug){
            flug = false
        if (+this.innerHTML == qws.correct){
            qws.correct_count += 1
            this.style.background = '#90ee90'
        } else{
            this.style.background = '#FF7F7F'
        }
        anime({
            targets:ans,
            background:"#8827ff",
            delay:1000,
            duration:500
        }).finished.then(function(){
            qws.display()
            flug = true  
        })
    }  
    }
    )
}

function create_result(){
    let h2 = document.createElement('h2')
    h2.className = 'res'
    h2.innerHTML = `Всього питань: ${qws.count}`
    h2.style.color = "white"
    h2.appendChild = div_finish.appendChild(h2)

    let h3 = document.createElement('h2')
    h3.className = 'res'
    h3.innerHTML = `Правильні відповіді: ${qws.correct_count}`
    h3.style.color = "white"
    h3.appendChild = div_finish.appendChild(h3)
    
    let h4 = document.createElement('h2')
    h4.className = 'res'
    h4.innerHTML = `Успішність: ${Math.round((qws.correct_count/qws.count)*100)}%`
    h4.style.color = "white"
    h4.appendChild = div_finish.appendChild(h4)
}

// Логіка перемикання вікон
    let div_start = document.querySelector('.start')
    let div_finish = document.querySelector('.finish')
    let div_test = document.querySelector('.card_qw')
    let btn_start = document.querySelector('.btn_start')
    let btn_start_again = document.querySelector('btn_start_again')
    btn_start.addEventListener('click',()=>{
        div_start.style.display = 'none'
        div_finish.style.display = 'none'
        div_test.style.display = 'flex'
    setTimeout(() => {
        div_test.style.display = 'none'
        create_result()
        div_finish.style.display = 'flex'
    }, 30000);
})
    btn_start_again.addEventListener('click',()=>{
        div_finish.style.display = 'none'
        div_test.style.display = 'flex'
    })
//

// send e-mail
function send_email(){
    let service_id = "service_mx9m63i"
    let template_id = "template_f0ls96h"
    let user_name = document.getElementById('text').value
    let user_mail = document.getElementById('email').value
    let params = {message: `Hello ${user_name}`,
    e_mail: `${user_mail}`}
    emailjs.send(service_id,template_id,params).then(response =>{
        alert('Результат успішно надісланий.')
    })
}

let btn_send = document.querySelector('.btn_send')
btn_send.addEventListener('click', send_email)