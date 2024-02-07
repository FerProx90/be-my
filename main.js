const btnYes = document.getElementById("btnyes");
const answer = document.getElementById("answer");
const btnNo = document.getElementById("btnno");
const title = document.getElementById("title");
const img = document.getElementById("img");
const h2 = document.getElementById("h2");

btnNo.addEventListener("click", () => {
  if (btnNo.textContent == "No") {
    title.textContent = "Qlo si no me quieres";
    img.setAttribute("src", "https://pbs.twimg.com/media/FZKs5vwWYAERjHQ.jpg");
    btnNo.textContent = "Yes x2";
    h2.textContent = "Try again";
  } else {
    img.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWg-TR6gN0HlLG5Y0u1PUUPMJ__LREJAZvrZ3ID1IxgidGZVkKpzzfQgSKLriAYmBRrz0&usqp=CAU"
    );

    h2.textContent = "así está mejor";
    btnNo.textContent = ":)";
    title.textContent = "ya sabia que si me querias n.n";
    btnYes.setAttribute("disabled", true);
    btnNo.setAttribute("disabled", true);

    let count = 5;
    const next = setInterval(() => {
      if (count < 1) {
        questionTwo();
        clearInterval(next);
      }
      h2.textContent = `siguiente pregunta en: ${count}`;
      count--;
    }, 1000);
  }
});

btnYes.addEventListener("click", () => {
  img.setAttribute(
    "src",
    "https://i.pinimg.com/236x/b3/b5/b1/b3b5b1c12dc7cffd4dfd43b9466cedc0.jpg"
  );
  h2.textContent = "<3";
  title.textContent = "Ahora besame";
  btnYes.setAttribute("disabled", true);
  btnNo.setAttribute("disabled", true);

  let count = 5;
  const next = setInterval(() => {
    if (count < 1) {
      questionTwo();
      clearInterval(next);
    }
    h2.textContent = `siguiente pregunta en: ${count}`;
    count--;
  }, 1000);
});

let quantity = 0;
const questionTwo = () => {
  title.textContent = "Del 1 al 10 cuanto me quieres?";
  btnNo.style.display = "none";
  btnYes.style.display = "none";
  img.style.display = "none";
  h2.style.display = "none";

  let count = 0;
  while (count < 11) {
    const button = document.createElement("button");
    button.textContent = count;
    button.setAttribute("class", "btn btn-mini");
    button.onclick = () => {
      quantity += parseInt(button.textContent);
      button.style.background = "#681b75";
      h2.style.display = "block";
      h2.textContent = `Me quieres: ${quantity} <3`;
    };
    answer.appendChild(button);

    count++;
  }
};
