import Heading from "../../../../../../global/components/heading";
import Space from "../../../../../../global/components/space";
import CourseListItem from "./components/course-list-item";
import "./styles/index.scss";

const CourseInfoCard = ({
    courseName,
    courseSubHeading,
    content,
}: {
    courseName: string;
    courseSubHeading: string;
    content: string[];
}) => {
    return (
        <div className="course-info-card">
            <Space amt={20} />
            <Heading
                text={courseSubHeading}
                size="0.75rem"
                color="#0056B8"
                fontWeight={700}
                font="PT Sans"
                maxWidth={500}
                letterSpacing={3}
            />
            <Space amt={5} />
            <Heading
                text={courseName}
                size="1.4rem"
                color="#0056B8"
                fontWeight={700}
                font="Raleway"
                maxWidth={500}
                letterSpacing={3}
            />
            <Space amt={10} />
            <div className="line"></div>
            <Space amt={15} />
            <div className="course-list-item-container">
                {content.map((c) => (
                    <CourseListItem text={c} />
                ))}
            </div>
        </div>
    );
};

export default CourseInfoCard;
