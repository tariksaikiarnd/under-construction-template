import Heading from "../heading";
import Space from "../space";
import "./styles/index.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container flex justify-space">
                <div className="footer-left">
                    <div className="logo-bgwhite"></div>
                    <Space amt={10} />
                    <Heading
                        text="2nd floor,Arunodoi Path, Srimantapur Guwahati, Kamrup Metro, Assam, 781032 India"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                    <Space amt={10} />
                    <Heading
                        text="Phone: +91-7670070767"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                    <Heading
                        text="Email: edresco.official@gmail.com"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                </div>
                <div className="footer-middle"></div>
                <div className="footer-right"></div>
            </div>
        </footer>
    );
};

export default Footer;
