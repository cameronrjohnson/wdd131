document.addEventListener("DOMContentLoaded", () => {
    const cardNumber = document.getElementById("cardnumber");
    const submitBtn = document.getElementById("submitBtn");

    cardNumber.addEventListener("input", () => {
        let value = cardNumber.value.replace(/\D/g, "").substring(0, 16);
        const parts = [];
        for (let i = 0; i < value.length; i += 4) {
            parts.push(value.substring(i, i + 4));
        }
        cardNumber.value = parts.join(" ");
    });

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Payment submitted successfully!");
    });
});
