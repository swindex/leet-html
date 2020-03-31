# leet-html README

Display literal `templates` as HTML,
Unlike other plugins NO ```/*html*/``` prefix is required!

## Features

Works like this:

![](https://raw.githubusercontent.com/swindex/leet-html/master/docs/example.png)

## Usage
The leet-html extension adds highlighting and IntelliSense for template strings in JavaScript and TypeScript. It works out of the box and has no dependencies.
## Acceptable Rules

The opening ` character must be preceeded by either one of those operators:
```return```, ```=```  , ```+=```  , ```+``` , ```?``` , ```:``` 

```
var a = `<div></div>` + `<br>`;
a += `<div></div>` + `<br>`;

return `<div></div>` + `<br>`;

return (true ? `<div></div>` : `<span></span>` );
```

## What does not work

The opening ` character can not be the first on the line and can not be enclosed by the folowing operators: ```(), []``` 


So the following variants will not be highlighted:
```
(`<div></div>');

(`<div>
</div>');

var a = 
`<div></div>` + `<br>`;

a += 
`<div></div>` + `<br>`;
```

## Solution for unsupported cases

Use the ```/*html*/``` prefix before the template to turn on highlighting:
```
(/*html*/`<div></div>');
```

## Release Notes


### 1.0.0
Initial release

### 1.1.1
More robust checking
Removed unneded dependency
