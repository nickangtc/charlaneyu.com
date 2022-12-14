# charlaneyu.com

Source code for the revamped charlaneyu.com, ported from WordPress (hosted for $100 annually on Bluehost) to a bunch of static pages rendered with React.js hosted for free and high-availability on Netlify.

Copyright: Everything content-wise is copyright Charlane Yu. Code-wise, you are free to do what you want with it! Maybe drop me a tweet to let me know what you did with it so I can check it out! :) 

## Unknowns 🤔

- ⚡️ Is Netlify configured to run `npm run build` and serve the production-optimised build?

## Development

Start local dev server with hot reload:

```s
$ npm start
```

Deploy to Netlify (only works if you're logged in to my account):

```s
$ git push
```

## Usage 

### Re-ordering Images

Edit src/assets/assets.json. The array ordering determines which image gets loaded first.

## Technical decisions

Scaffolded using **Create React App** so I don't have to fiddle forever with the build tooling.

**Tailwind CSS** for applying CSS without writing much of my own. Mainly to try it out but also to save time in pixelcraft.

Lazy-load images for Gallery page based on y-scrolling. Pre-load all images for front page slideshow for best experience.

## Milestones

- broke ground 10 August 2022
- first deployment to Netlify at https://charlaneyu.netlify.app/
- learned the philosophy of TailwindCSS in 100 seconds with [this vid](https://www.youtube.com/watch?v=mr15Xzb1Ook)
- proved concept of loading images dynamically with static React site using `require()` and JSON
