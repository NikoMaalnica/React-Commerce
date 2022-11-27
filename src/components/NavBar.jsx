import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const links = ["PC", "COMPONENTES", "PERIFERICOS"]

const NavBar = () => {
    return <header className="header">
    <Link to={`/`}>
        <img src={"https://www.imagensempng.com.br/wp-content/uploads/2021/08/05-8.png"} className="header__logo" alt="logo"/>
    </Link>
    <div className='header__nav'>
        {links.map((section) => {
            return (
                <Link style={{textDecoration: "none", color: "whitesmoke"}} to={`/category/${section.toLowerCase()}`} key={section}>
                    {section}
                </Link>
            )
        })}
    </div>
    <Link to={`/cart`} className="navbar__cart">
        <CartWidget />
    </Link>
    </header>
}

export default NavBar