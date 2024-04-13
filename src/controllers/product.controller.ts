import {Request, Response} from 'express';
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from '../models/Product.service';
import { AdminRequest } from '../libs/types/member';
import { ProductInput, ProductInquire } from '../libs/types/product';
import { ProductCollection } from '../libs/enums/products.enum';

const productController:T = {}
const productService = new ProductService();

//SPA

productController.getProducts = async (req: Request, res: Response)=>{
    try {
        console.log("getProducts");
        const {page,limit,order,productCollection,search} = req.query;
        const inquire: ProductInquire = {
            order: String(order),
            page: Number(page),
            limit: Number(limit),
        };

        if(productCollection) {
            inquire.productCollection = productCollection as ProductCollection;
        }


        if(search) {
            inquire.search = String(search);
        }

        const result = await productService.getProducts(inquire);

        res.status(HttpCode.OK).json(result);
       
    } catch(err) {
        console.log("Error, getProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}
//SSR

// GET-ALL
productController.getAllProducts = async (req: Request, res: Response)=>{
    try {
        console.log("getAllProducts");
        const data = await productService.getAllProducts();

        res.render("products", {products: data})
    } catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

// CREATE
productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
      console.log("createNewProduct");
      
    if(!req.files?.length) 
        throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED)

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele)=>{
        return ele.path;
    })

    console.log(data);
    
    await productService.createNewProduct(data);

    res.send(
        `<script>alert("Successfully creation!"); window.location.replace('/admin/product/all')</script>`
        );
        
    
    } catch (err) {
      console.log("Error, createNewProduct", err);
      const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
        `<script>alert("${message}"); window.location.replace('/admin/product/all')<script>`
      );
    }
  };

// UPDATE
productController.updateChosenProduct = async (req: Request, res: Response)=>{
    try {
        console.log("updateChosenProduct");
        const id = req.params.id;

        const result = await productService.updateChosenProduct(id, req.body);

        res.status(HttpCode.OK).json({data: result});
        
    } catch(err) {
        console.log("Error, updateChosenProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default productController;