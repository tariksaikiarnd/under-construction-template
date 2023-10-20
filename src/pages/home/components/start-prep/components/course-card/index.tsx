import Heading from "../../../../../../global/components/heading";
import "./styles/index.scss";

interface PropTypes {
    text: string;
}

const CourseCard = (props: PropTypes) => {
    return (
        <div className="course-card">
            <Heading
                text={props.text}
                fontWeight={700}
                font="PT Sans"
                size="1rem"
                maxWidth={100}
                center={true}
            />
        </div>
    );
};

export default CourseCard;
