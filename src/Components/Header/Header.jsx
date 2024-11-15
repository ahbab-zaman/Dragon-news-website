import moment from "moment";
import logo from "../../assets/logo.png"
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className="py-6 flex flex-col justify-center items-center space-y-2">
           <div>
           <img src={logo} alt="" />
           </div>
           <h2 className="font-semibold text-gray-600">Journalism Without Fear or Favour</h2>
           <div className="text-gray-600 font-semibold">
          { moment().format('MMMM Do YYYY')}
           </div>
           <div className="flex space-x-3 p-3 items-center bg-gray-200">
                <div className="bg-[#D72050] font-semibold text-slate-200 p-3">Latest</div>
                <div>
                <Marquee pauseOnHover={true}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia reprehenderit recusandae vel ea explicabo nihil id quaerat maxime quidem.</p>
                </Marquee>
                </div>
           </div>
        </div>
    );
};

export default Header;