// 1. Basic template literal with plain text
var numbers = [1, 2, 3, 4, 5];

// 2. Template literal with variable substitution
var u_name = "John";
var x = 10;
var y = 20;

var greeting = `Hello, ${u_name}!`;
var greeting = `Hello, world!`;
var sum = `The sum of ${x} and ${y} is ${x + y}.`;
var html = `<h1>${title}</h1>${content}`;


// 5. Template literal with multiple lines
var text = `
    <div>
        This is the first line.
        This is the second line.
        This is the third line.
    </div>
`;

var result = `The result is ${calculate(10, 20)}.`;
var list = `<ul>${numbers.map((n) => `<li>${n}</li>`).join("")}</ul>`;

var x = x ? 'abc' : `<div class="abc">Some Content</div>`
var x = x ? 'abc' : /*html*/`<div class="abc">Some Content</div>`
var x = x ? `<div class="abc">Some Content</div>` : 'abc'
var x = x ? `<div class="abc">Some Content</div>` : `<div class="abc">Some Content</div>`

// This still will now be correctly highlighted as HTML:
funcCall(`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)

// This will now be correctly highlighted as HTML:
funcCall(/*html*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)
funcCall(/*htm*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)
funcCall(/*htmx*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)
funcCall(/*svg*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)
funcCall(/*s*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)
funcCall(/*h*/`<div class="abc">Some Content</div>`,`<div class="abc">Some Content</div>`)

htm()`<div class="abc">Some Content</div>`
htm()`<div class="abc">Some Content</div>`
htm()`<div class="abc">Some Content</div>`
svg()`<div class="abc">Some Content</div>`
s()`<div class="abc">Some Content</div>`
h()`<div class="abc">Some Content</div>`
