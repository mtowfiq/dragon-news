import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col p-2 justify-center items-center gap-5">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="" />
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;