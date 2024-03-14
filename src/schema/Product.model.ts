import mongoose, { Schema } from "mongoose"; 
import { ProductCollection, ProductSize, ProductStatus, ProductVolume } from "../libs/enums/products.enum";

const productSchema = new Schema({
   ProductStatus: {
    type: String,
    enum: ProductStatus,
    default: ProductStatus.PAUSE
   },

   ProductCollection: {
    type: String,
    enum: ProductCollection,
    required: true
   },

   ProductName: {
    type: String,
    required: true
   },

   ProductPrice: {
    type: Number,
    required: true
   },

   ProductLeftCount: {
    type: Number,
    required: true
   },

   ProductSize: {
    type: Number,
    enum: ProductSize,
    default: ProductSize.NORMAL
   },

   ProductVolume: {
    type: Number,
    enum: ProductVolume,
    default: ProductVolume.ONE
   },

   ProductDesc: {
    type: String,
    required: true
   },

   ProductImages: {
    type: [String],
    default: []
   },

   ProductViews: {
    type: Number,
    default: 0
   },
},
{timestamps: true} // updatedAt, createdAt
);
productSchema.index(
    {productName: 1, productSize: 1, productVolume: 1},
    {unique: true}
)

export default mongoose.model('Product', productSchema);