let ad = prompt("Adınızı  daxil edin: ")
let user = prompt("Rəqəmi daxil edin ")
let number = Math.floor(Math.random() * 6);

if (user == number) {
    netice = `${ad}, sizi tebrik edirik. Siz qalib geldiniz.`
} else if (user > 5) {
    netice = `${ad}, 0-dan 5-e qeder reqem daxil etmelisiniz. `
}

else {
    netice = ` ${ad}, siz ${user} daxil etdiyiniz, udus reqemi ise ${number} idi. Siz uduzdunuz `
}

document.getElementById("zakir").innerHTML = netice;