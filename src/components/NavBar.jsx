import CartWidget from "./CartWidget"

const NavBar = () => {

    return <header className="header">
    <img src={"https://toppng.com/uploads/preview/dragon-heart-tribal-v3-red-by-kuroakai-icon-cool-guild-emblems-with-transparent-background-11562905775b9ugkvtndc.png"} className="header__logo" alt="logo"/>
    <div className='header__nav'><h3>PC'S</h3><h3>KEYBOARD/MOUSE</h3><h3>OTROS</h3></div>
    <CartWidget />
    </header>
}

export default NavBar