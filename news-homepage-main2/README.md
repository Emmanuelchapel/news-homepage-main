# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: []
- Live Site URL: [https://news-homepage-main-ten-nu.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

 while working through this project. i learned how to use Javascript function to create the open and close bar and also learn how to use linear-gradient in css

To see how i can add code snippets, see below:

```js
function menue(open,close) {
    // adding event to the  openbarBtn to open the menue
    open.addEventListener('click',() =>{
        dropDown.classList.add('open-menue');
    });
    // dding event to the  closebarBtn to close the menue
    close.addEventListener('click',()=>{
        dropDown.classList.remove('open-menue')
        close.classList.add('effect')
    });
}

menue(openbarBtn,closebarBtn); 
```



### Continued development
- writing clean and reusable code
- learning how to use APIs in future project

## Author

- Website - [Ochiheche Emmanuel](https://www.your-site.com)
- Frontend Mentor - [https://www.frontendmentor.io/profile/Emmanuelchapel]





