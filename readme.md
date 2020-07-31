# Slide In on Scroll
## Demo:
![Demo](demo/demo.gif)

## Live:
https://sebastianjuszczynski.github.io/Slide-in-on-scroll/
## Technologies
- HTML
- CSS
- JS
## Others 
- Function below taken from WesBos 30 days challenge
```javascript
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
```
### Description

Simply layout with images sliding in while they are half way through on page.
Please scroll 😀

Next project from 30 days challenge by **Wes Bos**