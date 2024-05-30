let clicks = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
let boosts = localStorage.getItem("boosts") ? parseInt(localStorage.getItem("boosts")) : 1;
let clickss = localStorage.getItem("clickss") ? parseInt(localStorage.getItem("clickss")) : 1;
let price_boosts = localStorage.getItem("price_boosts") ? parseInt(localStorage.getItem("price_boosts")) : 10;
let num_click = 1;

setInterval(function() {
  let autoClicks = 0; // Количество монет, которое вы хотите добавлять каждую секунду
  clicks += autoClicks;
  document.getElementById("clicks").innerHTML = clicks;
  localStorage.setItem("coins", clicks);
}, 1); // 1000 миллисекунд = 1 секунда


document.getElementById("price_boosts").innerHTML = price_boosts;

function countClicks() {
   let clicks_def = clickss;
   clicks += clicks_def;
   document.getElementById("clicks").innerHTML = clicks;
   localStorage.setItem("coins", clicks);
}

function boost_price(){
  document.getElementById("price_boosts").innerHTML = price_boosts;
  document.getElementById("clickss").innerHTML = clickss;
}

function buyboostclick(){
   if (clicks >= price_boosts) {
     clicks -= price_boosts;
     localStorage.setItem("coins", clicks);
     clickss += num_click;
     boosts += 1;
     num_click *= 2;
     price_boosts *= 3;
     localStorage.setItem("boosts", boosts);
     localStorage.setItem("clickss", clickss);
     localStorage.setItem("price_boosts", price_boosts);
     alert("Вы успешно улучшили кликер до " +  boosts)
     document.getElementById("price_boosts").innerHTML = price_boosts;
  document.getElementById("clickss").innerHTML = clickss;
   } else {
     alert("Недостаточно средств!")
     document.getElementById("price_boosts").innerHTML = price_boosts;
  document.getElementById("clickss").innerHTML = clickss;
   }
}

document.getElementById("boosts_lvl").innerHTML = "Уровень буста - " + boosts;
document.getElementById("price_boost").innerHTML = "Цена буста - " +  price_boosts;
document.getElementById("click_up").innerHTML = "Сколько кликов - " + clickss;

document.querySelector('.coin').addEventListener('touchstart', function() {
  this.classList.toggle('touch');
});

function animateClick() {
  const coin = document.querySelector('.coin');

  coin.style.transform = 'scale(0.8)';
  setTimeout(() => { coin.style.transform = 'scale(1)'; }, 200);
}

const coin = document.querySelector('.coin');

coin.addEventListener('click', () => {
  coin.style.transform = 'scale(1.1)';
  
  setTimeout(() => {
    coin.style.transform = 'scale(1)';
  }, 200);
});
