import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Contact Page!</h1>
      <hr />
      <Link href="/">
        <a>Go to Home Page!</a>
      </Link>
    </>
  );
};

export default HomePage;
