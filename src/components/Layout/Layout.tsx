import Header from "./Header";
import Footer from "./Footer";
import "../../common/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="main-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}