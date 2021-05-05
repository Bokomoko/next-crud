# Simple crud in Next + Tailwind

This app made with Next.js uses another backend app made with next (prod-store)

## User Stories

•	As a user, I want to create a product with at least these fields: name, description, price and published_at
•	As a user, I want to upload one or more images to the product.
•	As a user, I want to list all the products I've created.
•	As a user, I want to update and soft deletes a product
•	As a user, I want to confirm my email to start using the application
•	As a guest, I want to sign up and sign in to the application
•	As a new user, I need to confirm my email address to start using the application

## How to run this website

- Create your own **.env.local** file based on **.env.example** (Create a mongoDB instance on MongoDB Atlas or docker container and paste the database url on **.env.local**, and also create an account on auth0 and paste he AUTH0 variables).

- Install all dependencies with yarn:

```bash
yarn
```

- Start dev server:

```bash
yarn dev
```

## Technologies used

- Node
- Yarn
- Typescript
- Next.js
- NextAuth (Authentication)
- Auth0
- Tailwind CSS
- SWR (Client side caching)
- MongoDB Atlas (cloud database as a service)
- Vercel (hosting)

## Features included

- Authentication (create account/login)
- CRUD products and images
