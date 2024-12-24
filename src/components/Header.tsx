import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-12 py-4">
      <section className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 flex justify-between items-center flex-row gap-[20px]">
        <h1 className="font-extrabold text-[24px] tracking-wide">cyber</h1>
        <SearchSection />
        <Navbar />
        <div className="header-icons">
          <Link to="/favorites">Favorites</Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
