import { Outlet } from "react-router-dom";
import LeftAside from "../LeftAside/LeftAside";
import MiddleAside from "../MiddleAside/MiddleAside";
import RightAside from "../RightAside/RightAside";

const HomeDetails = () => {
    return (
        <div>
            <div className="py-6 grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-3">
            <LeftAside></LeftAside>
            </div>
            <div className="col-span-6">
            <MiddleAside></MiddleAside>
            <Outlet></Outlet>
            </div>
            <div className="col-span-3">
            <RightAside></RightAside>
            </div>
            </div>
        </div>
    );
};

export default HomeDetails;