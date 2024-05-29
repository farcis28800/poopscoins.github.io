let clicks = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
let boosts = localStorage.getItem("boosts") ? parseInt(localStorage.getItem("boosts")) : 1;
let clickss = localStorage.getItem("clickss") ? parseInt(localStorage.getItem("clickss")) : 1;
let price_boosts = localStorage.getItem("price_boosts") ? parseInt(localStorage.getItem("price_boosts")) : 10;
let num_click = 1;

function countClicks() {
   let clicks_def = clickss;
   clicks += clicks_def;
   document.getElementById("clicks").innerHTML = clicks;
   localStorage.setItem("coins", clicks);
}

function buyboostclick(){
   if (clicks >= price_boosts) {
     clicks -= price_boosts;
     localStorage.setItem("coins", clicks);
     clickss += num_click;
     boosts += 1;
     num_click *= 2;
     price_boosts *= 4;
     localStorage.setItem("boosts", boosts);
     localStorage.setItem("clickss", clickss);
     localStorage.setItem("price_boosts", price_boosts);
     alert("Вы успешно улучшили кликер до " +  boosts)
   } else {
     alert("Недостаточно средств!")
   }
}

document.getElementById("boosts_lvl").innerHTML = "Уровень буста - " + boosts;
document.getElementById("price_boost").innerHTML = "Цена буста - " +  price_boosts;
document.getElementById("click_up").innerHTML = "Сколько кликов - " + clickss;

document.querySelector('.coin').addEventListener('touchstart', function() {
  this.classList.toggle('touch');
});

document.addEventListener('click', function(e) {
  const coin = document.createElement('div');
  coin.classList.add('coin');
  document.body.appendChild(coin);
  coin.style.left = e.clientX + 'px';
});
