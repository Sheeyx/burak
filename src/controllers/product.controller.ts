import {Request, Response} from 'express';
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from '../models/Product.service';

const productController:T = {}
const productService = new ProductService();

// GET-ALL
productController.getAllProducts = async (req: Request, res: Response)=>{
    try {
        console.log("getAllProducts");
        res.render("product")
    } catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

// CREATE
productController.createNewProduct = async (req: Request, res: Response)=>{
    try {
        console.log("createNewProduct");
    } catch(err) {
        console.log("Error, createNewProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

// UPDATE
productController.updateChosenProduct = async (req: Request, res: Response)=>{
    try {
        console.log("getAllProducts");
    } catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default productController;