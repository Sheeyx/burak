import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';
import makeUploader from './libs/utils/uploader';

/* Restaurants */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);


routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );


routerAdmin.get('/check-me', restaurantController.checkAuthSession);
routerAdmin.get('/logout', restaurantController.logout);

/* Product */

routerAdmin.
get(
'/product/all', 
restaurantController.verifyRestaurant,
productController.getAllProducts
)
.post(
    "/product/create",
    restaurantController.verifyRestaurant,
    // uploadProductImage.single("productImage"),
    makeUploader("products").array("productImages",5),
    productController.createNewProduct
  )
.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/* User */

routerAdmin.get("/user/all", restaurantController.verifyRestaurant,restaurantController.getUsers)

export default routerAdmin;