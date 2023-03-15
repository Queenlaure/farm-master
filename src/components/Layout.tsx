import Navbar from './Navbar';

interface Nav {
    children?: JSX.Element | JSX.Element[] | null;
}

const Layout = ({children}:Nav) => {
    return (
        <>
            <Navbar /> 
            <div className = "">
                <main className = "">
                    {children}
                </main>
            </div>
        </>
     );
}
 
export default Layout;