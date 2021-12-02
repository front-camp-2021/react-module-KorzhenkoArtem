import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs-home"></Link>
      <div className="breadcrumbs-chevrons"></div>
      <div className="breadcrumbs-colored">eCommerce</div>
      <div className="breadcrumbs-chevrons"></div>
      <div className="breadcrumbs-page">Electronics</div>
    </div>
  );
};

export default Breadcrumbs;
