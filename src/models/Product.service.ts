import { ProductStatus } from "../libs/enums/products.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { ProductInput, Product, ProductUpdateInput, ProductInquire } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";

class ProductService {
    private readonly productModel;
    
    constructor(){
        this.productModel = ProductModel;
    }


    //SPA

    public async getProducts(inquire: ProductInquire): Promise<Product[]>{
        const match: T = { productStatus: ProductStatus.PROCESS}

        if(inquire.productCollection)
            match.productCollection = inquire.productCollection;

        if(inquire.search)
            match.productName = ({$regex: new RegExp(inquire.search, "i")});

            const sort: T = inquire.order === "ProductPrice"
            ? {[inquire.order]: 1}
            : {[inquire.order]: -1}

            const result = await this.productModel.aggregate([
                {$match: match},
                {$sort: sort},
                {$skip: (inquire.page * 1 - 1) * inquire.limit},
            ]).exec();

            if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
            return result;
    }
    //SSR

    // Create
    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input);          
        } catch (error) {
            console.log("Error model:createNewProduct",error);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
            
        }
    }

    // Get All
    public async getAllProducts(): Promise<Product[]> {
        const result = await this.productModel.find().exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result;
    }

    //Update
    public async updateChosenProduct(id: string,input: ProductUpdateInput): Promise<Product> {
        // string = Obeject id
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel.findByIdAndUpdate({_id: id}, input, { new:true } ).exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
        console.log("result", result);

        return result;
        
    }
}

export default ProductService;