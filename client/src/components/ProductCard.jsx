import { productData, responsive } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

const ProductCard = () => {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    return (
        <div className="App">
            <h1>Products</h1>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </div>
    );
}

export default ProductCard;