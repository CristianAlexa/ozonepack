import SectionTitle from "../SectionTitle";
import aboutImg from "../../assets/pictures/about.png";

const AboutComp = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row border border-gray-300">
        {/* Hero left side */}
        <img className="w-full sm:w-1/2" src={aboutImg} alt="" />
        {/* Hero right side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0">
          <div className="text-slate-700 w-4/5 flex flex-col gap-4">
            <p className="font-light text-slate-500">
              Ozone Pack is a sustainable and eco-friendly packaging supplier
              for takeaway services, food trucks, catering businesses, bakeries,
              and festivals.
            </p>
            <h3>Mission</h3>
            <p className="font-light text-slate-500">
              Our mission is to offer a comprehensive range of eco-friendly and
              sustainable products sourced ethically. Catering to a global
              clientele including restaurants, catering companies, bakeries,
              cafes, takeaway shops, dark kitchens, schools, NHS, universities,
              street food vendors, food trucks, food halls, wholesale, and
              private enterprises, we prioritise delivering superior quality,
              affordability, and volume flexibility.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center py-12">
        <SectionTitle>WHY CHOOSE US</SectionTitle>
      </div>
      <section className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3>Quality Assurance:</h3>
          <p className="text-slate-500">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3>Convenience:</h3>
          <p className="text-slate-500">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3>Exceptional Customer Service:</h3>
          <p className="text-slate-500">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutComp;
