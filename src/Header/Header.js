import { Link } from "react-router-dom";

function Header() {
    return <header>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
    </header>
}

export default Header;