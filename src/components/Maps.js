const Maps = () => {
  return (
    <section
      className="container mx-auto px-5 md:px-16 lg:px-24"
      id="Maps"
      data-aos="fade-up"
    >
      <span className="service-name text-center" style={{ fontSize: "26px" }}>
        Where are we at?
      </span>
      <h2
        className="title text-center md:w-1/2 mx-auto"
        style={{ fontSize: "22px" }}
      >
        Find Us
      </h2>
      <div>
        <div className="flex justify-center align-center ">
          <iframe
            style={{ width: "90vw", height: "40vh" }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=720&amp;height=800&amp;hl=en&amp;q=Pinnacle%20Group%20Tuition%20-%20JEE/NEET%20Classes.,%20Monalisa%20Apartment,%20Shreeji-Little%20millennium%20street,%20beside%20Union%20Bank,%20Sector-19,%20Airoli,%20Navi%20Mumbai,%20Maharashtra%20400708+(Pinnacle%20Group%20Tutions)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Maps;
