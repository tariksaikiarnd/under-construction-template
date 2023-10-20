import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import CourseInfoCard from "./components/course-info-card";
import "./styles/index.scss";

const courseContent = [
    {
        courseName: "PRE-FOUNDATION",
        courseSubHeading: "12 MONTHS - CLASS 9",
        points: [
            "For students moving to 9th class",
            "Ensure good results at school level exams",
            "Proper foundation for competitive exams",
            "Path way for a four-year journey to reach your final goal of IITJEE/NEET.",
        ],
    },
    {
        courseName: "FOUNDATION",
        courseSubHeading: "12 MONTHS - CLASS 10",
        points: [
            "Well-designed program for students moving to 10th class",
            "Specialized effort focusing on Board Exam",
            "Proper foundation for competitive exams",
            "Focus on NTSE and Olympiads and a parallel platform for JEE/NEET aspirants.",
        ],
    },
    {
        courseName: "FRESHER",
        courseSubHeading: "24 MONTHS - CLASS 11",
        points: [
            "Designed program for students moving to 11th class",
            "Specialized effort focusing on Board Exam",
            "Proper coaching for competitive exams",
            "Focus to excel in JEE (Main+ Advanced), NEET, Boards & Olympiads.",
        ],
    },
    {
        courseName: "ACHIEVER",
        courseSubHeading: "12 MONTHS - CLASS 12",
        points: [
            "Dynamic 1-year Program for students moving to 12th",
            "Build strong foundation to crack JEE/NEET",
            "Ensure good percentage in Board Exams.",
            "Specially designed for students with 12 months left for exams.",
        ],
    },
    {
        courseName: "TARGET",
        courseSubHeading: "12 MONTHS - DROPPER",
        points: [
            "Comprehensive 1-year program for 12th passed outs",
            "Focus to excel in JEE (Main+ Advanced) and NEET.",
            "Resurrect your confidence, strengthen your foundation and achieve top gear of your preparation.",
        ],
    },
];

const CoursesDescSection = () => {
    return (
        <div className="container">
            <div className="course-info-text-container">
                <Heading
                    text="OUR COURSES"
                    color="#fff"
                    size="2rem"
                    font="Raleway"
                    fontWeight={700}
                    maxWidth={600}
                    letterSpacing={6}
                />
                <Heading
                    text="Explore, Enroll, Excel: Start Your Course Journey Today"
                    color="#fff"
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={600}
                />
                <Space amt={20} />
                <div className="line"></div>
            </div>
            <Space amt={30} />
            <div className="course-info-cards-container">
                {courseContent.map((c) => (
                    <CourseInfoCard
                        courseName={c.courseName}
                        courseSubHeading={c.courseSubHeading}
                        content={c.points}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesDescSection;
