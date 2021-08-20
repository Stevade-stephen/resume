let title = document.querySelector(".title").innerHTML
let nameC = document.querySelector(".name").innerHTML
let email = document.querySelector(".email").innerHTML
let message = document.querySelector(".message").innerHTML
let submit = document.querySelector(".submit")


const requestBody = {
    title: title.trim(),
    name: nameC.trim(),
    sender: email.trim(),
    message: message.trim()
}


const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
};


submit.addEventListener("click", function(){
    console.log(title + " " + nameC + " " + email + " "+ message);
    fetch('https://goresume-api.herokuapp.com/messages', options)
    .then(data => {
        if (!data.created) {
            throw Error(data.status);
        }
        console.log(data)
        return data.json();
        }).then(update => {
        console.log(update);
    })
})