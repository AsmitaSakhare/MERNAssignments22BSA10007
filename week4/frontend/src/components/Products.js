import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$1000", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: "$500", img: "https://via.placeholder.com/150" },
];

const Products = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.img} alt={product.name} className="w-full" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.price}</p>
          <Link to={/products/${product.id}} className="text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;