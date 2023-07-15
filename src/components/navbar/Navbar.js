export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo" onClick={() => window.location.replace("/")}>
        <span>PHOTOFOLIO</span>
      </div>
    </div>
  );
};
