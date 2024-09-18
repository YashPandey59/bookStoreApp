import React from "react";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";
function Course() {
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to BookKart, where every page turns into an exciting journey! At BookKart, we offer a wide range of books for readers of all ages and interests, from the latest bestsellers and timeless classics to niche genres and academic texts. Whether you're a casual reader, a passionate bookworm, or looking for the perfect gift, we have something for everyone. Our well-organized sections make it easy to explore genres like fiction, non-fiction, fantasy, mystery, self-help, and more.
          </p>
            <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
            </Link>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
