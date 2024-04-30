export function randint(min,max){
    let n = Math.random()
    n = n*(max-min) + min
    n = Math.floor(n)
    return n
}


export function shuffle(arr){
    for (let i = 0; i < arr.length; i += 1){
        let j = randint(0,arr.length)
        let a  = arr[i]
        arr[i] = arr[j]
        arr[j] = a
    }
}

function choose(arr){
    let n  = randint(0,arr.length)
    return arr[n]
}   

let div_qw  = document.querySelector('.qw')
let div_ans = document.querySelector('.ans')
let ans_arr = div_ans.querySelectorAll('div')

export class Qustion{
    constructor(){
        this.qw = NaN
        this.correct = NaN
        this.ans = []
        this.symbol = ['+','-','/','*']
        this.count = 0
        this.correct_count = 0
    }
    display(){
        this.new_qw()
        this.count += 1
        div_qw.innerHTML = this.qw
        shuffle(this.ans)
        for (let i = 0; i < ans_arr.length; i += 1){
            ans_arr[i].innerHTML = this.ans[i]
        }
    }
    new_qw(){
        let sym = choose(this.symbol)
        let n1 = randint(0,100)
        let n2 = randint(0,100)
        if (sym == '+'){
            this.correct = n1+n2
        }
        if (sym == '-'){
            this.correct = n1-n2
        }
        if (sym == '*'){
            this.correct = n1*n2
        }
        if (sym == '/'){
            n2 = randint(1,100)
            while (n1%n2!=0){
                n2 =randint(1,100)
            }
            this.correct = n1/n2    
        }  
        this.qw = `${n1} ${sym} ${n2}`
        this.ans = [this.correct]
        for (let i=0;i<4;i++){
            let n = randint(this.correct-15,this.correct+15)
            while (n==this.correct || this.ans.includes(n)) {
                n = randint(this.correct-15,this.correct+15)
            }
            this.ans.push(n)
        }
    }
}