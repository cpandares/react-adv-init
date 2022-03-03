import {ProductCart,  ProductButton, ProductImage, ProductTitle } from "../components/index";


const product = {
    id:"1",
    title: "Coffe Mug",
    img:'./coffee-mug.png'
}


const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoping cart</h1>
            <hr />

            <div style = {{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                <ProductCart  product = { product } >
                    <ProductCart.Image  />
                    <ProductCart.Title title={"Hola "} />
                    <ProductCart.Buttons                             
                        /> 
                 </ProductCart>

                    <ProductCart  product = { product } >
                        <ProductImage  />
                        <ProductTitle title={"Cofe "} />
                        <ProductButton 
                             
                        /> 
                    </ProductCart>
            </div>
        </div>
    );
};

export default ShoppingPage;


