import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="*:bg-base-100 join flex rounded-none join-vertical">
                <button className="btn join-item justify-start"><FaFacebook/>Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter/>Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;