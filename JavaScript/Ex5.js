// Transform this function that selects a random element from the array and concatenates it to your name:
// let alerts = [""Hey, you are awesome"", ""You are so wonderful"", ""What a marvel you are"", ""You're so lovely"", ""You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES""]
// function showAlert(name){    
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
// }
// showAlert(""you ball of fluff"")
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

const showAlert = (name =>{
    const random = Math.floor(Math.random()*alerts.length);
    console.log(name +" "+ alerts[random]);

})

showAlert("you ball of fluff");