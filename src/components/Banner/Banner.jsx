import bannerBG from "../../assets/images/more/3.png";
import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";

const Banner = () => {
  return (
    <section>
      {/* Banner Image */}
      <section
        className="h-[550px] flex items-center justify-end "
        style={{
          backgroundImage: `url(${bannerBG})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "cover",
        }}
      >
        <div>
          <div className="lg:w-3/5 h-full mx-auto space-y-5 ">
            <h1 className="font-Rancho text-55 leading-68 text-white">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="leading-30 text-white">
              Its coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-color1 text-color2 font-Rancho px-6 py-2 text-2xl leading-30 ">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-color5 py-14
      "
      >
        <div className=" lg:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* card 1 */}
          <div className="">
            <img className="w-[70px] h-[70px]" src={icon1} alt="" />
            <h2 className="text-color4 font-Rancho text-35 leading-43 mt-4 mb-2">
              Awesome Aroma
            </h2>
            <p className="text-color3 leading-7">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          {/* card 2 */}
          <div className="">
            <img className="w-[70px] h-[70px]" src={icon2} alt="" />
            <h2 className="text-color4 font-Rancho text-35 leading-43 mt-4 mb-2">
              High Quality
            </h2>
            <p className="text-color3 leading-7">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          {/* card 3 */}
          <div className="">
            <img className="w-[70px] h-[70px]" src={icon3} alt="" />
            <h2 className="text-color4 font-Rancho text-35 leading-43 mt-4 mb-2">
              Pure Grades
            </h2>
            <p className="text-color3 leading-7">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          {/* card 4 */}
          <div className="">
            <img className="w-[70px] h-[70px]" src={icon4} alt="" />
            <h2 className="text-color4 font-Rancho text-35 leading-43 mt-4 mb-2">
              Proper Roasting
            </h2>
            <p className="text-color3 leading-7">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
