let emojis = ["🐱","🐶","🐹","🐰","🐱","🐶","🐹","🐰"];
emojis.sort(() => 0.5 - Math.random());

let game = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let lock = false;
let moves = 0;

// create cards
emojis.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.innerText = emoji;
    card.dataset.value = emoji;

    card.onclick = () => flipCard(card);

    game.appendChild(card);
});

function flipCard(card) {
    if (lock || !card.classList.contains("hidden")) return;

    card.classList.remove("hidden");

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        lock = true;
        moves++;
        document.getElementById("moves").innerText = moves;

        if (firstCard.dataset.value === secondCard.dataset.value) {
            firstCard = null;
            secondCard = null;
            lock = false;
        } else {
            setTimeout(() => {
                firstCard.classList.add("hidden");
                secondCard.classList.add("hidden");
                firstCard = null;
                secondCard = null;
                lock = false;
            }, 800);
        }
    }
}
