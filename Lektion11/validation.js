const togglePassword = () => {
    const password = document.getElementById('password')
    const icon = document.getElementById('toggle-password-icon')

    if(password.type === "password") {
        password.type = "text"
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'

    } else {
        password.type = "password"
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
}


const validateName = (e) => {
    
    e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    
    const regEx = /^[A-Ö]([a-öA-Ö\u00c0-\u017F]+(([' -][a-öA-Ö])?[a-öA-Ö]*)){1,30}$/
   
    if (!regEx.test(e.target.value)) {
        console.log("firstname not valid")
        return false
    }

    console.log("Firstname valid")
    return true

}

const validateEmail = (e) => {
    
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
   
    if (!regEx.test(e.target.value)) {
        console.log("email not valid")
        return false
    }

    console.log("email valid")
    return true
}