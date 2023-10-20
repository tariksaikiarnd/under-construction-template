import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";
import CoursesDescSection from "./components/courses-desc";
import ScrollToTop from "../../scrollToTop";
interface PropTypes {
    width: number;
    height: number;
}

const CoursePage = (props: PropTypes) => {
    console.log(props);
    return (
        <section className="bg-blue">
            <ScrollToTop />
            <NavBar />
            <Space amt={30} />
            <CoursesDescSection />
            <Footer />
        </section>
    );
};

export default CoursePage;
