import {ProductCart as ProductCartComponent} from './ProductCart';

import { ProductButton } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';



export { ProductButton } from './ProductButton';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCart = Object.assign(ProductCartComponent,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButton
})
