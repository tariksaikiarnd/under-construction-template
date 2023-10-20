import "./styles/index.scss";
interface PropTypes {
    text: string;
    size: string;
    fontWeight: number;
    maxWidth: number | string;
    font: "Raleway" | "PT Sans";
    padding?: string;
    color?: string;
    letterSpacing?: number;
    center?: boolean;
    underline?: boolean;
}
const Heading = (props: PropTypes) => {
    return (
        <p
            className="heading"
            style={{
                fontFamily: props.font,
                fontWeight: props.fontWeight,
                color: props.color ? props.color : "#3E3E3E",
                maxWidth: props.maxWidth,
                fontSize: props.size,
                padding: props.padding,
                letterSpacing: props.letterSpacing ? props.letterSpacing : "",
                textAlign: props.center ? "center" : "left",
                textDecoration: props.underline ? "underline" : "",
            }}
        >
            {props.text}
        </p>
    );
};

export default Heading;
