import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import { Link } from "react-router";


const Product = (props) => {
  const { handleCartModalOpen, fetchExistingCartList } = props;
  const { title, image, price, id } = props.product;

  const handleAddToCart = () => {


    const addToCartProduct = {
      name: title,
      price,
      image,
      id,
      qty: 1,
      total: price * 1,
    }; // existing product list  
    const existingProduct = localStorage.getItem("cart");
    const parsedCartProduct = JSON.parse(existingProduct);
    console.log(addToCartProduct);
    console.log(parsedCartProduct);
    const isInCart =
      parsedCartProduct && parsedCartProduct.length > 0
        ? parsedCartProduct?.find((it) => it.id === id)
        : undefined;
    console.log(isInCart);
    if (isInCart === undefined) {
      if (parsedCartProduct && parsedCartProduct.length > 0) {
        const newCart = [...parsedCartProduct, addToCartProduct];
        // console.log(newCart);
        const stringifyProduct = JSON.stringify(newCart);
        localStorage.setItem("cart", stringifyProduct);
        toast.success(`The product has been added to the cart ${title}`, {
          duration: 5000
        });
        handleCartModalOpen()
        fetchExistingCartList()
      } else {
        //add new cart item
        const stringifyProduct = JSON.stringify([addToCartProduct]);
        localStorage.setItem("cart", stringifyProduct);
        toast.success(`The product has been added to the cart ${title}`, {
          duration: 5000
        });
        handleCartModalOpen()
        fetchExistingCartList()
      }
    } else {
      const stringifyProduct = JSON.stringify([addToCartProduct]);
      localStorage.setItem("cart", stringifyProduct);
      toast.error("The product has been already in cart", { duration: 5000 });
    }
    };
    
    return (
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className=" w-full h-full block object-cover object-center "
            src={props.product?.image}
          />
        </a>

        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {props.product?.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {props.product?.title}
          </h2>
          <p className="mt-1">${props.product?.price}</p>

          <Link to={`/products/${props.product?.id}`}>
            <button className="border p-2 w-full rounded-md">See More</button>
          </Link>

          <button
            onClick={handleAddToCart}
            className="border my-2 bg-lime-400 font-bold p-2 w-full rounded-md flex gap-2 items-center justify-center cursor-pointer"
          >
            <Icon className="text-2xl font-bold" icon={"typcn:shopping-cart"} />
            Add To Cart
          </button>
        </div>
      </div>
    );
  };

export default Product;
