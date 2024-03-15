import { ProductCollection, ProductSize, ProductStatus } from "../enums/products.enum";
import {ObjectId} from 'mongoose';

export interface Product {
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productLeftSize: ProductSize;
    productLeftVolume: number; 
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productLeftSize?: ProductSize;
    productLeftVolume?: number; 
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}