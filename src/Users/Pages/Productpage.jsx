import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Incentives from "../Components/Incentives";
import { TailSpin } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
import { userAuth } from "../../auth/userAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productpage = (props) => {
  const [product, setProduct] = useState({});

  const [userReview, setUserReview] = useState({
    comment: "",
    rating: 0,
  });

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewloading, setReviewLoading] = useState(false);
  const { id } = useParams();
  const { userid, user } = userAuth();
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/${id}`
        );
        const result = await response.json();
        if (!response.ok) {
          console.error(result.error);
        } else {
          setProduct(result);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, [id]);

  console.log("Product Detail", product);
  const convertToClassName = (name) => {
    return name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setUserReview({
      ...userReview,
      [name]: value,
    });
  };

  const handleReviewSubmit = async (e) => {
    setReviewLoading(true);
    e.preventDefault();
    try {
      if (!userReview.comment || !userReview.rating) {
        alert("Please fill up the form");
        setReviewLoading(false);
        return;
      }
      const response = await fetch("http://localhost:4000/postreview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          username: user,
          comment: userReview.comment,
          rating: userReview.rating,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add review");
      }
      const result = await response.json();
      setReviews([...reviews, result.review]);
      setUserReview({ comment: "", rating: 0 });
      setReviewLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:4000/getreview/${id}`);
        const result = await response.json();
        if (!response.ok) {
          console.log(result.error);
        } else {
          setReviews(result);
          props.handlerating(reviews);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, [id]);
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  console.log("Total Rating", totalRating);
  const totalRated = reviews.length;
  console.log("Rated", totalRated);

  // 888888888888888888888888888888888888888888
  const updateProductRating = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/products/review/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: totalRating,
            rated: totalRated,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product rating");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update product rating");
    }
  };
  useEffect(() => {
    updateProductRating();
  }, [reviews]);

  // 888888888888888888888888888888888888888888

  const addtocarthandler = async (product) => {
    try {
      if (!selectedSize) {
        toast.error("Please select a size", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      if (userid) {
        const response = await fetch("http://localhost:4000/doc/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userid,
            productId: product._id,
            size: selectedSize,
          }),
        });
  
        const responseData = await response.json();
  
        if (response.status === 400 && responseData.message === "Product is out of stock") {
          // If the product is out of stock, show a toast notification
          toast.error("Product is out of stock", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status === 400) {
          // If the product is already in the cart, show an error message
          console.log(responseData.error);
          alert(responseData.error);
        } else if (response.status === 201 || response.status === 200) {
          // If the product is successfully added to the cart, show success message
          toast.success("Product Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          // Handle other response statuses if needed
          console.log("Unexpected response:", responseData);
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "You must login to add a product to the cart.",
          footer: '<a href="/login">Signup here</a>',
        });
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the product to the cart.");
    }
  };
  

  const addtoFavhandler = async (product) => {
    try {
      if (userid) {
        const response = await fetch("http://localhost:4000/doc/getfavdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userid,
            productId: product._id,
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
        alert("product added to wishlist");
      } else {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "You must login to add a product to the cart.",
          footer: '<a href="/login">Login here</a>',
        });
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <TailSpin color="black" width={100} height={100} />
          </div>
        ) : (
          <>
            <div className="lg:w-4/6 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <div
                  className="image-container rounded-xl border border-gray-200"
                  style={{
                    maxHeight: "600px",
                    width: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full"
                    src={product.image}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-2xl title-font font-black mb-1 text-justify">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <ReactStars
                    count={5}
                    size={34}
                    color2={"gold"}
                    value={totalRating / totalRated}
                    edit={false}
                  />
                </div>
                <span className="title-font font-bold text-2xl text-red-600">
                  ${product.price}
                </span>
                <p className="leading-relaxed mt-8 text-justify">
                  {product.description}
                </p>
                <p className="font-bold mt-3">
                  Product Category: {product.productType}
                </p>
                {/* <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  {product.sizes && product.sizes.length > 0 && (
                    <div>
                      <p className="font-bold">Product Sizes</p>
                      <div className="mt-4 flex flex-wrap">
                        {product.sizes.map((size, index) => (
                          <button
                            key={index}
                            className={`p-2 border rounded-lg m-2 hover:bg-slate-800 hover:text-white ${convertToClassName(
                              size
                            )}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div> */}
                  <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <p className="font-bold">Product Sizes</p>
                    <div className="mt-4 flex flex-wrap">
                      {product.sizes.map((size, index) => (
                        <button
                          key={index}
                          className={`p-2 border rounded-lg m-2 hover:bg-slate-800 hover:text-white ${convertToClassName(size)} ${selectedSize === size ? 'bg-slate-800 text-white' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

                <button
                  className="flex justify-center items-center text-xl font-bold w-full text-white bg-zinc-950 border-0 py-4 px-8 focus:outline-none hover:bg-slate-700 rounded-2xl my-4"
                  onClick={() => addtocarthandler(product)}
                >
                  Add to cart
                </button>
                <button
                  className="flex justify-center items-center text-xl font-bold w-full text-black bg-white border py-4 px-8 focus:outline-none hover:border-2 rounded-2xl my-4"
                  onClick={() => addtoFavhandler(product)}
                >
                  Add to favorite
                </button>
              </div>
            </div>
            <div className="container px-5 mx-auto ">
              <div className="lg:w-4/6 mx-auto">
                <h2 className="font-bold text-3xl flex justify-center mt-14">
                  Reviews({reviews.length})
                </h2>
                <form onSubmit={handleReviewSubmit}>
                  <textarea
                    className="border-b text-black border-gray-300 focus:border-red-500 w-full h-12 mt-4 p-2"
                    placeholder="Write your review here..."
                    name="comment"
                    value={userReview.comment}
                    onChange={handleReviewChange}
                  ></textarea>
                  <ReactStars
                    count={5}
                    size={34}
                    color2={"#ffd700"}
                    value={userReview.rating}
                    onChange={(rating) =>
                      setUserReview({ ...userReview, rating: rating })
                    }
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-red-500 text-white px-3 py-2 rounded"
                    >
                      {reviewloading ? (
                        <ThreeDots width={35} height={25} color="white" />
                      ) : (
                        "Comment"
                      )}
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border p-4 mt-2 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <h3 className="font-bold">{review.username}</h3>
                          {/* <p className="text-xs text-gray-400">
                            {review.createdAt}
                          </p> */}
                          <p className="text-xs text-gray-400">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <ReactStars
                          count={5}
                          size={24}
                          color2={"#ffd700"}
                          value={review.rating}
                          edit={false}
                        />
                      </div>
                      <p className="text-sm text-justify font-semibold mt-2 w-full">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Incentives />
    </section>
  );
};

export default Productpage;
