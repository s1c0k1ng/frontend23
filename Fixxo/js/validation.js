function validateEmail(element) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorElement = document.getElementById(`error-${element.id}`)

    if (!regEx.test(element.value)) {
        errorElement.innerHTML = `Must be a valid email address.`
        return false
    }
        
    errorElement.innerHTML = ``
    return true
}

function validateName(element) { 


    const errorElement = document.getElementById(`error-${element.id}`)

    if (element.value.length < 3){
        errorElement.innerHTML = `Must be a valid name.`
        return false
    }
          
    errorElement.innerHTML = ``
    return true
}

function validateComment(element) {

     const errorElement = document.getElementById(`error-${element.id}`)

    if (element.value.length < 3){
        errorElement.innerHTML = `Must be a valid comment.`
        return false
    }
           
    errorElement.innerHTML = ``
    return true
}
 
function validate(event) {
    switch(event.target.id) {
        case 'email':
            validateEmail(event.target)
            break;
        case 'name':
            validateName(event.target)
            break;
        case 'comments':
            validateComment(event.target)
            break;
    }
}



async function handleContactForm(e) {
    e.preventDefault()
    const errors = []
    const errorMessage = document.getElementById('errorMessage')
    errorMessage.innerHTML = ''

    for(let element of e.target) {
        if(element.required) {
            const errorElement = document.getElementById(`error-${element.id}`)
            
            if (element.value.length === 0) {
                errorElement.innerHTML = `${element.id} is required.`
                errors.push(false)
            } else {
                errorElement.innerHTML = ``

                switch(element.id) {
                    case 'email':
                        errors.push(validateEmail(element))
                        break
                    case 'name':
                        errors.push(validateName(element))
                        break
                    case 'comments':
                        errors.push(validateComment(element))

                }
            }
        }
    }
}    