const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const correctAnswers = ['B','B','B','B']

form.addEventListener('submit', e=>{
    e.preventDefault()
    let score = 0
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25
        }
    })
    
    result.classList.remove("d-none")
    scrollTo(0,0)

    let output = 0
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`
        if(score === output){
            clearInterval(output)
        }else{
            output++
        }
    },10)
}) 