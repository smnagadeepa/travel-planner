let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let VideoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// VideoBtn.forEach(btn=>{
//     btn.addEventListener('click',()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src=btn.getAttribute('data-src');
//         document.querySelector('#video-slider').src=src;
//     });
// });

VideoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

function submitForm() {
    const days = document.getElementById('days').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    const sentence = `I want to travel from ${from} to ${to} for ${days} days. Please suggest a travel itinerary.`;
    
    // Mock function to simulate ChatGPT response
    const mockChatGPTResponse = (input) => {
        return sentence;
        //return `Based on your request: "${input}", I suggest visiting the following places... (mock response)`;
    };

    const response = mockChatGPTResponse(sentence);

    document.getElementById('output').innerText = response;
}

function submitForm() {
    // Get the values from the form
    var frm = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    // Check if the "from" and "to" values are the same
    if (frm === to) {
        // Show an alert if they are the same
        alert('The departure and destination locations cannot be the same.');
        // Prevent form submission
        return false;
    }
    // Allow form submission if values are different
    return true;
}


$(document).ready(function(){
    
})