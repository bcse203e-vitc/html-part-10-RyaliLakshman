document.getElementById("textInput").addEventListener("input", function () {
    let text = this.value;
    
    // Count characters
    let charCount = text.length;
    document.getElementById("charCount").textContent = charCount;

    // Count words
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById("wordCount").textContent = words.length;

    // Alert if more than 200 characters
    if (charCount > 200) {
        alert("Character limit exceeded! Max: 200 characters.");
        this.value = text.substring(0, 200); // Trim to 200 characters
        document.getElementById("charCount").textContent = 200; // Update count
    }
});