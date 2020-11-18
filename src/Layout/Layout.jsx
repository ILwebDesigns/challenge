import React from "react";
import PropTypes from "prop-types";
import Footer from "../Components/Footer";

function CoreLayout({ children }) {
  return (
    <div id="main">
      <div id="content-wrap">{children}</div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;
