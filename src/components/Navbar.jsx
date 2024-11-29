import logo1 from "../assets/images/more/logo1.png";
import navBG from "../assets/images/more/15.jpg";

const Navbar = () => {
  return (
    <div
      className="max-h-[120px] flex  justify-center items-center
     gap-4"
      style={{
        backgroundImage: `url(${navBG})`,
        backgroundSize: "100% 100%",
      }}
    >
      <img className="w-[75px] h-[90px]" src={logo1} alt="" />
      <h1 className="font-Rancho text-6xl leading-75 text-white">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Navbar;
