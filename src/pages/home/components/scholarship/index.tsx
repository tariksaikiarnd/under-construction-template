import { useNavigate } from "react-router-dom";
import "./styles/index.scss";
const ScholarshipSection = () => {
    const navigate = useNavigate();
    return (
        <div
            className="scholarship-section container"
            onClick={() => {
                navigate("scholarship");
            }}
        >
            <div className="scholarship-cover container p0"></div>
        </div>
    );
};

export default ScholarshipSection;
