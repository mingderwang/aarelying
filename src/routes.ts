import express, { Request, Response } from "express";

const routes = express.Router();


routes.get('/', (request: Request, response: Response)=>{
  return response.json({
    message: 'Welcome to the api home'
  })
});

export { routes };
