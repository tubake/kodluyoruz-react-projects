const slugify = require('slugify')

const text = "yine kaybetti.";

const mySlug = slugify(text,"_");

console.log(text);
console.log(mySlug.toLowerCase());
