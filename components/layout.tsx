import Navbar from "../components/NavbarComponent";

const Layout = ({ children }) => {
  return (
    <div className="contenedor">
      <div className="separador">
        <div>
          <header>
            <Navbar></Navbar>
          </header>
          <main>{children}</main>
        </div>
        <footer /* className="fixed-bottom" */>1</footer>
      </div>
    </div>
  );
};

export default Layout;
