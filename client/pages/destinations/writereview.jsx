import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
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
  var destination;
  destination = localStorage.getItem("destination-slug");
  var username;
  username = localStorage.getItem("email");
  const userReview = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:8000/api/destinations/reviews`, {
      stars: rating.stars,
      review: review.review,
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
  console.log(rating);
  console.log(review);
  return (
    <div>
      <h1>Write a Review</h1>
      <div className="border border-pmry w-4/5 mx-auto shadow-lg">
        <form onSubmit={(e) => userReview(e)}>
          <div>
            <p className="p-5 text-2xl text-primary font bold">
              Rate your Experience
            </p>
            <div className="flex px-5 text-2xl">
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
                          className="star"
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
          </div>
          <label className="p-4">
            review:
            <input
              className="border border-pmry py-2 px-4"
              type="text"
              name="review"
              id="review"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <label className="p-4">
            comment:
            <textarea
              type="text"
              className="border border-pmry py-2 px-4"
              name="Comment"
              id="Comment"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Writereview;
