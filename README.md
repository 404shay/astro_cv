## Background 

This project utilizes [@mmouzo](https://github.com/mmouzo)'s [Astro-CV-Esquelete](https://github.com/mmouzo/astro-cv-esquelete) template. Kudos to him for creating such a clean experience! Here's what I was looking to accomplish:

- A minimal, straightforward portfolio site that allows me to establish a more independent web presence.
- The opportunity to work with Astro, daisyUI, and TailwindCSS in a structured, low-stakes environment.  
- More practice using a VPS to serve up content. I learn something new every time and it's awesome to have full control over what I'm creating. 

## Making Updates

Future reference for me:

- [PM2](https://pm2.io/) is managing the Node.js processes
- Nginx handles the web traffic, for example load balancing, SSL certs, reverse proxying, etc. 

This separation is neat because it minimizes downtime during updates. Once new changes are reviewed + pushed, run:

- ```npm run build```
- ```pm2 restart astro_cv```

This will generate the new build and restart the Astro application. No need to restart Nginx unless you've updated its configuration for some reason. 


