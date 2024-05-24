const accordian = document.querySelectorAll('.qnabox');
accordian.forEach(accordian => {
    accordian.addEventListener('click', e => {
        accordian.classList.toggle('active');
    })
})


const form = document.getElementById('form1');
const firstname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

const validateInput = () => {
    const nameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value;

    if(nameValue === '' || emailValue === '' || subjectValue === '' || messageValue === ''){
        alert('All field has to be fill');
    }
    else{
        alert('form submited successfully');
        form.reset();
    }
}