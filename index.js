console.log("hello world");

let secret = document.getElementsByClassName('secret-link')[0]; 

secret.addEventListener('mouseenter',function() {
    secret.style.top = Math.random() * 100 + 'em';
});