## Instroduction

This project created while learning ReactJS hook from WebDevSimplified video - https://www.youtube.com/watch?v=Rh3tobg7hEo


## Things Learned
- Learn useState, useEffect
- Learn components utilization and props
- Add TailWindCSS
- Moderize UI for application
- Deploy to Netlify



## Setup React App
- create react app `npx create-react-app <appname>`
- To start development server, run `npm start`
- To build and serve production bundle, run `npm run build`


## Add TailWindCSS
- Install TailWindCSS `npm install tailwindcss -D`
- Create tailwindcss.config.js file`npx tailwindcss init -p`
- Update tailwindcss.config.js content as `content: ["./src/**/*.{js,jsx,ts,tsx}",]`
- Create `index.css` file and add content `@tailwind base; @tailwind components; @tailwind utilities;`
- import tailwindcss in `index.js` as `import './index.css'`
- done. now you can start the development server with tailwindcss setup

## Reference
- [Learn React With This One Project - Web Dev Simplified](https://www.youtube.com/watch?v=Rh3tobg7hEo)
- [Add Tailwindcss to React](https://tailwindcss.com/docs/guides/create-react-app)
- react.dev