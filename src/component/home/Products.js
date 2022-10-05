import CardItem from "../productCards/CardItem";
import "./Products.scss";
import useHttp from "../../hooks/usehttp";



const Products = () => {
    const {getProducts: products} = useHttp();

  return (
    <section className="Products">
      <div className="Products__content">
        <h2>Products</h2>

        <div className="Products__content--cards">
            {
                products && products.map((p) => {
                   return  <CardItem
                     key={p.id} 
                     id={p.id}
                     name={p.name}
                     price={p.price}
                     image={p.image}
                    />
                })
            }
   

        </div>
      </div>
    </section>
  );
};

export default Products;
