function Navbar({ cart }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">QuickCart</span>
      <span className="text-white">Cart: {cart}</span>
    </nav>
  );
}

export default Navbar;