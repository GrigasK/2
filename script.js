/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let click = 1;

document.getElementById("btn__element").addEventListener("click", () => {
  let clicks = click++;

  document.getElementById("btn__state").textContent = clicks;

  if (clicks > 4) {
    alert("užtenka click`inti, einam prie sekančio :)");
  }
});
