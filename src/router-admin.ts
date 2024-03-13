import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';

/* Restaurants */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);

routerAdmin
.get('/signup', restaurantController.getSignup)
.post('/signup', restaurantController.processSignup);

routerAdmin.get('/check-me', restaurantController.checkAuthSession);
routerAdmin.get('/logout', restaurantController.logout);

/* Product */

routerAdmin
.get('/product/all', productController.getAllProducts)
.post('/product/create', productController.createNewProduct)
.post('/product/:id', productController.updateChosenProduct);

/* User */


export default routerAdmin;