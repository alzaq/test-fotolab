import React from "react";
import Link from "next/link";
import api from "myapi";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Home Page!</h1>
      <img src="/static/image.jpg" alt="Home Page" />
      <hr />
      <Link href="/contact">
        <a>Contact Us!</a>
      </Link>
      <pre>{JSON.stringify(api(), null, 2)}</pre>
    </>
  );
};

export default HomePage;
