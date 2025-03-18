import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$1000", description: "High-performance laptop", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: "$500", description: "Latest smartphone", img: "https://via.placeholder.com/150" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <img src={product.img} alt={product.name} className="w-full" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;