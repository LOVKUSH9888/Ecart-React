const Header = ({ handleShow, count }) => {
  return (
    <div className="flex shopping-card">
      <div onClick={() => handleShow(false)}>Shopping Cart App</div>
      <div onClick={() => handleShow(true)}>
        Cart <sup> {count} </sup>
      </div>
    </div>
  );
};

export default Header;
