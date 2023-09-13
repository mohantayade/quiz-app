const questions = [
    {
        'que': 'Which of the following is Markup language?',
        'a': 'HTML',
        'b':'CSS',
        'c':'js',
        'd': 'java',
        'correct': 'a'
    },

    {
        'que': ' Who is the father of Computers?',
        'a': ' James Gosling',
        'b':'Charles Babbage',
        'c':'Dennis Ritchie',
        'd': 'Bjarne Stroustrup',
        'correct': 'b'
    },

    {
        'que': 'What is the full form of CPU?',
        'a': 'Computer Processing Unit',
        'b':' Computer Principle Unit',
        'c':'Central Processing Unit',
        'd': 'Control Processing Unit',
        'correct': 'c'
    }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('queBox')
const optionInput = document.querySelectorAll('.option')


const loadQuetion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    
    queBox.innerText= `${index+1+')'} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submit = ()=>{
    const data = questions[index];
    const ans = getAns();
    
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuetion();

    return;
}

const getAns = ()=>{
    let answers;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
              answers = input.value;
            }
        }
    )
    return answers;
}
const reset =()=>{
    optionInput.forEach(
        (input)=>{
            input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `<h3 style="text-align:center"> Test is End </h3>
    <p style="text-align:center; font-size: 20px"> Your Result: ${right}/${total} Correct Answer</p>`;
}

loadQuetion();