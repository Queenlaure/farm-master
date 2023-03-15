// import './Front.css';

import Navbar from "./Navbar";
import Tabbar from "./Tabbar";

// import { Helmet } from "react-helmet";
function PageLayout({ children, title, mainClass }: any) {
    return (
        <>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{title ? title : 'Hi'} | Farmer Fon </title>
                <link rel="canonical" href="https://farmmaster.africa" />
            </Helmet> */}

            <main>
                <Navbar />
                <div className="">
                    <div className="">
                        <div className="w-100">{children}</div>
                    </div>
                </div>
                <Tabbar />
            </main>
        </>
    )
}

export default PageLayout;