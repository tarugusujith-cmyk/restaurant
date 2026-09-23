
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import PopularMenu from "../components/home/PopularMenu";
import Pagination from "../components/common/Pagination";
import Footer from "../components/common/Footer"

import { menuItems } from "../data/menuData";



function Menu() {

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const totalPages = Math.ceil(
    menuItems.length / itemsPerPage
  );

  return (
    <div>
      <Navbar />
      <PopularMenu title="Our Menu" />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Footer />
    </div>
  )
}

export default Menu


