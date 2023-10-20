import Space from "../../../../global/components/space";
import Button from "../../../../global/components/btn";
import "./styles/index.scss";
const HeroSection = () => {
    return (
        <div className="hero flex container align-center justify-space">
            <div className="hero-left">
                <div className="hero-left-anim">
                    <img src="hat-svg.svg" alt="animated image" />
                </div>
                <p className="hero-text">Learning Today, Leading Tomorrow</p>
                <Space amt={10} />
                <p className="hero-subtext">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minus eligendi
                    nemo velit nostrum nisi culpa, magnam rerum.
                </p>
                <Space amt={20} />
                <Button
                    text="Join Now!"
                    width={100}
                    height={30}
                    type="filled"
                    bgColor="#0056B8"
                    fgColor="#fff"
                    linkTo="courses"
                />
            </div>
            <div className="hero-right">
                <img src="hero-right.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;
