import Header from "../../Components/Header/Header";
import HomeDetails from "../../Components/HomeDetails/HomeDetails";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="font-poppins w-11/12 mx-auto ">
           <Header></Header>
           <Navbar></Navbar>
           <HomeDetails></HomeDetails>
        </div>
    );
};

export default Home;