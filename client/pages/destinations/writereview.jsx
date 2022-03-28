import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { FaStar, FaComment } from "react-icons/fa";
import Link from "next/link";
import Footer from "../../components/componentsFiles/footer";
import { FiCornerDownLeft } from "react-icons/fi";
const Writereview = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [review, setReview] = React.useState({
    stars: "",
    review: "",
    comment: "",
    slug: "",
    email: "",
  });
  const [error, setError] = React.useState("");
  var reviewText;
  if (rating.stars <= 1) {
    reviewText = "Poor";
  } else if (rating.stars <= 2) {
    reviewText = "Fair";
  } else if (rating.stars <= 3) {
    reviewText = "Good";
  } else if (rating.stars <= 4) {
    reviewText = "Very Good";
  } else if (rating.stars <= 5) {
    reviewText = "Excellent";
  }

  var destination;
  destination = localStorage.getItem("destination-slug");
  var username;
  username = localStorage.getItem("email");
  const userReview = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:8000/api/destinations/reviews`, {
      stars: rating.stars,
      review: reviewText,
      comment: review.Comment,
      slug: destination,
      email: username,
    })
      .then((res) => {
        addToast("Review added successfully", {
          appearance: "success",
        });
        setTimeout(() => {
          router.push(`/destinations/${destination}`);
        }, 1000);
      })
      .catch((err) => {
        setError(err.response.data.message);
        addToast(err.response.data.message, {
          appearance: "error",
        });
      });
  };

  const handleChange = (e) => {
    const newdata = { ...review };
    newdata[e.target.id] = e.target.value;
    setReview(newdata);
  };
  const { addToast } = useToasts();
  return (
    <div>
      <h1 className="text-center my-5 font-bold text-4xl">Write a Review</h1>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-end w-4/5 mx-auto">
          <span className="my-1 font-bold text-xl"><FiCornerDownLeft /></span> &nbsp;
          <Link href={`/destinations/${destination}`}>
            <h1 className="underline cursor-pointer">Go Back</h1>
          </Link>
        </div>
        <form onSubmit={(e) => userReview(e)}>
          <div>
            <p className="p-5 mx-2 text-3xl text-primary font-bold">
              Rate your Experience
            </p>
          </div>
          <h1 className="text-2xl mx-2 my-5 px-5 py-2">
            How was{" "}
            <strong className="text-primary capitalize">
              {destination.replace(/-/g, " ")}
            </strong>{" "}
            ?
          </h1>
          <label className="px-5 py-5 mx-2 text-lg">
            review: &nbsp;
            <input
              type="text"
              className="text-lg outline-none border-none"
              style={{
                backgroundColor: "transparent",
              }}
              id="review"
              disabled
              name="review"
              value={reviewText}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <div className="flex px-5 cursor-pointer text-2xl">
            <p className="mx-2 text-lg">Add your rating: </p>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <div className="flex" key={i}>
                  <label>
                    <input
                      style={{
                        display: "none",
                        position: "relative",
                        width: "20px",
                      }}
                      type="radio"
                      name="rating"
                      id="rating"
                      value={ratingValue}
                      onClick={() =>
                        setRating({ ...rating, stars: ratingValue })
                      }
                    />
                    <span>
                      <FaStar
                        className="star cursor-pointer"
                        color={
                          ratingValue <= rating.stars ? "#ffc107" : "#e4e5e9"
                        }
                      />
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
          <br />
          <h1 className="mx-2 px-5 py-2 my-1 font-bold">
            Tell us about your visit*
          </h1>
          <div className="bg-blue-100 mx-5 w-11/12 rounded-lg">
            <label className="p-1 text-lg mx-2">
              <span className="px-2 mx-5 flex py-1">
                {" "}
                <span className="my-1">
                  <FaComment />
                </span>{" "}
                &nbsp;Comment:{" "}
              </span>
              <textarea
                type="text"
                className="form-control rounded-lg block my-3 mx-5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="Comment"
                style={{
                  width: "97%",
                }}
                id="Comment"
                rows={9}
                placeholder="Write your review here"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <br />
          <div className="mx-5 ">
            <input
              className="mx-2"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value="checkbox"
              checked
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="checkbox">
              By uploading these photos, I affirm that they belong to me and
              that I agree to be bound by Accommod's{" "}
              <strong>Terms & Conditions</strong>
            </label>
          </div>

          <button
            className="border w-11/12 ml-5 my-2 py-2 px-5 bg-pmry text-white"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Writereview;
