import styles from '../styles/styles.module.css'


import useProduct from '../hooks/useProduct';
import { createContext, } from 'react';
import { ProductCardProps, ProductContextProps,  } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;






export const ProductCart = ({ children, product }:ProductCardProps) => {
  
    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product
        } }>

            <div className={ styles.productCard }>

                {
                    children
                }
            
            {/* 
            <ProductImage  img ={ product.img } />

            <ProductTitle title={ product.title } />

            <ProductButton 
                    increaseBy={ increaseBy }
                    counter={ counter }  
                /> 
                */}

            </div>
        </Provider>
    );
};

export default ProductCart; 

