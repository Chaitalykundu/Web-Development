function formatName(name) {
    // 1. Remove extra spaces

    name = name.trim();
    // 2. Split the name into words
    // 3. Capitalize first letter of each word
    // 4. Join back into a formatted name
    return name;
}

console.log(formatName("   john    doe   "));
console.log(formatName("  alice  Johnson "));