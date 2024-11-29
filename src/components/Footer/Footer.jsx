import logo1 from "../../assets/images/more/logo1.png";
import bgImg from "../../assets/images/more/13.jpg";
import bgImg2 from "../../assets/images/more/24.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section
        className=""
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 py-10">
          {/* left */}
          <div className=" space-y-8">
            <div className="space-y-4">
              <img className="w-[70px]" src={logo1} alt="" />
              <h2 className="font-Rancho text-45 leading-56 text-color4">
                Espresso Emporium
              </h2>
              <p className="font-Raleway text-xl text-color3 leading-9">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="text-4xl text-color4 flex gap-3 ">
                <FaFacebook />
                <FaTwitter />
                <FaInstagramSquare />
                <FaLinkedin />
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-45 leading-56 text-color4 font-Rancho">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <IoCall className="text-color4 text-2xl" />
                  <p className="text-xl leading-9 font-Raleway text-color3">
                    +88 01533 333 333
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <MdEmail className="text-color4 text-2xl" />
                  <p className="text-xl leading-9 font-Raleway text-color3">
                    info@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <FaLocationDot className="text-color4 text-2xl" />
                  <p className="text-xl leading-9 font-Raleway text-color3">
                    72, Wall street, King Road, Dhaka
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>
            <h2 className="text-45 leading-56 text-color4 font-Rancho">
              Connect with Us
            </h2>
            <form action="" className="flex flex-col space-y-4">
              <input
                className="px-4 py-3 rounded-lg border-none"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="px-4 py-3 rounded-lg border-none"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="px-4 py-3 rounded-lg border-none"
                name="message"
                rows="4"
                cols="50"
                placeholder="Message"
                style={{
                  resize: "none",
                }}
              ></textarea>
              <input
                className="border-2 border-color4 rounded-full  px-5 py-2 text-color4 lg:w-1/3 font-Rancho text-2xl"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </section>
      <section
        className="text-center py-4"
        style={{
          backgroundImage: `url(${bgImg2})`,
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="font-Rancho text-xl leading-6 text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h2>
      </section>
    </footer>
  );
};

export default Footer;
