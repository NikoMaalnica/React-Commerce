import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export const UserLayout = () => {
    return <div className='layout__main'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
}

export default UserLayout