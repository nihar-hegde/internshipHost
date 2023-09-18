import logo from '../assets/claimzippylogo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center">
        <img src={logo} className="img-fluid" alt="Logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
