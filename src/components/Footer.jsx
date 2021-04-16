import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      Made with{" "}
      <span role="img" aria-label="heart emoji">
        💖
      </span>{" "}
      by Mehul Varshney
      <br />
      <p>Copyright {year}</p>
    </footer>
  );
}
export default Footer;
