const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const footerFirstParagraph = document.querySelector('footer p:first-of-type');  
footerFirstParagraph.innerHTML = `&copy; ${currentYear} | Taylor Plumb | United States of America`;

const footerSecondParagraph = document.querySelector('footer p:nth-of-type(2)');
footerSecondParagraph.textContent = `Last modified: ${lastModified}`;