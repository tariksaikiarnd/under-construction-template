import Card from "./components/card";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import "./styles/index.scss";

const content: { heading: string; subheading: string; imgLink: string }[] = [
    {
        heading: "100% Scholarship",
        subheading: "Based on E.A.S.T. Exam",
        imgLink: "unlimited_access.png",
    },
    {
        heading: "Online Resources",
        subheading: "Access to unlimited all India test series packages",
        imgLink: "anywhere.png",
    },
    {
        heading: "Expert Teachers",
        subheading: "Highly Experienced and Dedicated Faculties",
        imgLink: "expert_teachers.png",
    },
    {
        heading: "Specialized Mentoring",
        subheading: "Anonymous mentoring and counselling from IITian/NITian",
        imgLink: "unlimited_access.png",
    },
    {
        heading: "Specialized Mentoring",
        subheading: "Anonymous mentoring and counselling from IITian/NITian",
        imgLink: "expert_teachers.png",
    },
];

const GoalsSection = () => {
    return (
        <div className="goals container">
            <Heading
                text="Achieve your goals with us!"
                maxWidth={1300}
                size="1.4rem"
                fontWeight={700}
                font={"Raleway"}
                padding={"0 20px"}
            />
            <Space amt={30} />
            <div className="card-container">
                {content.map((c) => (
                    <Card
                        width={350}
                        height={180}
                        heading={c.heading}
                        subHeading={c.subheading}
                        imgLink={c.imgLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoalsSection;
