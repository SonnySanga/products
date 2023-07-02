import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between lg:max-w-7xl mx-auto p-4">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex space-x-4">
        <Link href="" className="menu-items">
          Home
        </Link>
        <Link href="" className="menu-items">
          Service
        </Link>
        <Link href="" className="menu-items">
          post
        </Link>
        <Link href="" className="menu-items">
          Bucjet
        </Link>
        <Link href="" className="menu-items">
          new{" "}
        </Link>
        <Link href="" className="menu-items">
          Advanve
        </Link>
      </div>
      <div>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default Header;
