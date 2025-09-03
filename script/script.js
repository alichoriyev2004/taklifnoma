// To'y sanasini belgilash (21 sentyabr 2025 yil)
const weddingDate = new Date("2025-09-21T18:00:00");

// Har bir soniya uchun vaqtni hisoblash va yangilash
function updateCountdown() {
    const now = new Date();  // Hozirgi vaqt
    const timeDifference = weddingDate - now; // Qolgan vaqtni hisoblash

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Kunlarni hisoblash
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Soatlarni hisoblash
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Daqiqalarni hisoblash
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Sekundlarni hisoblash

        document.getElementById("time-left").innerHTML = 
            `To'y sanasigacha qolgan vaqt: ${days} kun ${hours} soat ${minutes} minut ${seconds} sekund`;
    } else {
        document.getElementById("time-left").innerHTML = "To'y bugun!";
    }
}

// Vaqtni yangilash har 1 soniyada bir marta
setInterval(updateCountdown, 1000);
