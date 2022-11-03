import NavBar from './NavBar';
import Footer from './Footer';

export const UserLayout = ({children}) => {
    return <div className='layout__main'>
            <NavBar />
            {children}
            <Footer />
        </div>
}

export default UserLayout