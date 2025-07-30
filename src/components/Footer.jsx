import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-1">© {new Date().getFullYear()} Qstly Electronics </p>
      <small></small>
    </footer>
  );
}

export default Footer;
