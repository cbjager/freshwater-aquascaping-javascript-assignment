const tips = [
    "Keep shrimp water parameters stable instead of chasing perfect numbers.",
    "Avoid overfeeding. Shrimp can survive on biofilm and algae between feedings.",
    "Use a sponge filter so baby shrimp do not get sucked into the filter.",
    "Live plants give shrimp places to hide and graze.",
    "Always make sure aquarium products are safe for shrimp before using them.",
    "Small, regular water changes are usually better than large sudden changes."
];

function showShrimpTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipDisplay = document.getElementById("shrimp-tip");

    tipDisplay.textContent = tips[randomIndex];
}