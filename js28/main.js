document.getElementById("phoneNum").addEventListener("input", (event) => {
    const input = event.target;
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
    const text = input.value;
    
    // Videodaki Applying RegEx mantığı:
    if (regex.test(text)) {
        input.style.borderColor = "green"; // Format doğruysa yeşil
    } else {
        input.style.borderColor = "red";   // Format yanlışsa kırmızı
    }
});