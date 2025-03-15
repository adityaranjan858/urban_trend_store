import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-dark text-white ">
        <div className="container text-center mt-5 py-3">
          <p className="mb-1">Urban Trend Store - Elevate Your Style</p>
          <p className="mb-0">
            Made with{" "}
            <span className="text-danger">
              <i className="fa fa-heart"></i>
            </span>{" "}
            by <strong>Aditya Ranjan</strong> | Copyright &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
