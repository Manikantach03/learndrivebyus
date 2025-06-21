import NavBarHead from "./Nav-Bar/Nav";
import HeroBanner from "./Home-Pages/HeroBanner";
import InfoCards from "./Home-Pages/InfoCards/InfoCards";
import DrivingSchools from "./Home-Pages/Driving-Schools/DrivingSchools";
import CompareCars from "./Home-Pages/Compare-Cars/CompareCars";
import Footer from "./Footer/Footer";

function SchoolDrivingHome() {
  return (
    <>
      {/* Header */}
      <NavBarHead />

      <HeroBanner />

      <InfoCards />

      <DrivingSchools />

      <CompareCars />

      <Footer />
    </>
  );
}

export default SchoolDrivingHome;
