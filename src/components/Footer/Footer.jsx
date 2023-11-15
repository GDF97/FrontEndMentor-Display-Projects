import React from "react";
import "./styles.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {anoAtual} Pedro Silva. All Rights Reserved.</p>
    </footer>
  );
}
