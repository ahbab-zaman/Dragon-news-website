import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <div>
           <div>
           <img src={logo} alt="" />
           </div>
           <h2 className="font-semibold font-poppins">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;