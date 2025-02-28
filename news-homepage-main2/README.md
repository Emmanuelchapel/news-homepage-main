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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development
- writing clean and reusable code
- learning how to use APIs in future project

## Author

- Website - [Ochiheche Emmanuel](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)




