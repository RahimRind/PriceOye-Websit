
let btn = document.querySelector('#btn');   
let arr = []



btn.addEventListener('click',(event)=>{

    event.preventDefault(); // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        return;
    }

    // Validate password length
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // If validation passes, proceed to create account
    let obj = {
        email: email.value,
        password: password.value
    };

    arr.push(obj);
localStorage.setItem('userData', JSON.stringify(arr));
window.location = 'signin.html'


console.log(arr);

}   )
