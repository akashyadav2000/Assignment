# React + Vite

front end

npm i

npm run dev

backend

node seedCards.js

npm run dev

{
"dependencies": {
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mongoose": "^8.6.0"
},
"scripts": {
"start": "node server.js",
"dev": "nodemon server.js",
"seed": "node seedCards.js"
},
"devDependencies": {
"nodemon": "^3.1.4"
}
}




├── backend
|     ├── .env
|     ├── models
|     |     ├── Card.js
|     ├── routes
|     |     ├── cardRoutes.js
|     ├── seedCards.js
|     ├── server.js



├── frontend

|     ├── index.html
|     ├── public
|     |     ├── logo.png
|     ├── src
|     |     ├── App.jsx
|     |     ├── Component
|     |     |     ├── Componets.jsx
|     |     |     ├── style.css
|     |     ├── main.jsx
