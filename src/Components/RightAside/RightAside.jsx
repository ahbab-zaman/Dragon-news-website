import { FaGithub, FaGoogle } from "react-icons/fa";
import facebookLogo from "../../assets/fb.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import addPhoto1 from "../../assets/class.png";
import addPhoto2 from "../../assets/playground.png";
import addPhoto3 from "../../assets/swimming.png";
const RightAside = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-slate-700 font-semibold">Login With</h2>

      <div className="space-y-2 mt-4">
        <button className="border px-4 py-2 rounded-md w-full flex items-center gap-3 justify-center text-blue-400 font-semibold">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="border px-4 py-2 rounded-md w-full  flex items-center gap-3 justify-center font-semibold">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>

      <h2 className="text-slate-700 font-semibold">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-transparent join-item w-full flex items-center justify-start">
            <img src={facebookLogo} alt="" /> Facebook
          </button>
          <button className="btn bg-transparent join-item w-full flex items-center justify-start">
            <img src={twitterLogo} alt="" /> Twitter
          </button>
          <button className="btn bg-transparent join-item w-full flex items-center justify-start">
            <img src={instagramLogo} alt="" /> Instagram
          </button>
        </div>
      </div>

      <div className="bg-base-200 p-3">
        <h2 className="text-slate-700 font-semibold">Q-Zone</h2>
        <div className="flex flex-col gap-8">
          <img src={addPhoto1} alt="" />
          <img src={addPhoto2} alt="" />
          <img src={addPhoto3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightAside;
