const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">My Store</h1>
        <div>
          <a href="/" className="mx-2">Home</a>
          <a href="/products" className="mx-2">Products</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;