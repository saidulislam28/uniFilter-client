import { useEffect, useState } from "react";
import Banner from "../../component/banner/Banner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState(""); // For sorting

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic.get(
          `/products?page=${currentPage}&limit=10&search=${searchTerm}&category=${category}&priceRange=${priceRange}&sort=${sortOption}`
        );
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [axiosPublic, currentPage, searchTerm, category, priceRange, sortOption]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-[730px] px-4 lg:px-16">
      <Banner />

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h5 className="text-2xl lg:text-4xl my-6 lg:my-10">Products</h5>

        <div className="flex overflow-hidden rounded-md border w-full lg:w-auto">
          <div className="relative flex-1">
            <input
              className="p-3 pl-4 outline-none bg-black1 w-full"
              placeholder="Search products"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black border">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 my-6">
        <select
          className="p-2 border w-full lg:w-auto"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
        </select>

        <select
          className="p-2 border w-full lg:w-auto"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-1000">$100 - $1000</option>
          {/* Add more price range options here */}
        </select>

        <select
          className="p-2 border w-full lg:w-auto"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateDesc">Date Added: Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 shadow-xl my-5 border-t"
          >
            <figure>
              <img src={product.productImage} alt="Image not Available" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg lg:text-xl">{product.productName}</h2>
              <p className="text-sm lg:text-base">{product.description}</p>
              <p className="text-sm lg:text-base">Price: {product.price} $</p>
              <p className="text-sm lg:text-base">Rating: {product.ratings}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-300 text-sm lg:text-base">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="join flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mt-6">
  <button
    className="btn btn-sm w-full sm:w-auto"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous page
  </button>

  <div className="flex flex-wrap gap-1">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        className={`join-item btn btn-sm w-8 sm:w-auto ${page === currentPage ? "btn-active" : ""}`}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    ))}
  </div>

  <button
    className="btn btn-sm w-full sm:w-auto"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next page
  </button>
</div>
    </div>
  );
};

export default Home;
