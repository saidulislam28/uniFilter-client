import { useEffect, useState } from "react";
import Banner from "../../component/banner/Banner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic.get(`/products?page=${currentPage}&limit=10&search=${searchTerm}`);
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [axiosPublic, currentPage, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-[730px]">
      <Banner />

      <div className="flex items-center justify-between">
        <h5 className="text-4xl my-10">Products</h5>

        <div className="flex overflow-hidden rounded-md border">
          <div className="relative flex-1">
            <input
              className="p-3 pl-4 outline-none bg-black1"
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

      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 shadow-xl my-5 border-t"
          >
            <figure>
              <img src={product.productImage} alt="Image not Available" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price} $</p>
              <p>Rating: {product.ratings}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-300">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="join flex items-center gap-3 max-w-xl mx-auto">
        <button
          className="btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous page
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`join-item btn ${page === currentPage ? "btn-active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        
        <button
          className="btn"
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
