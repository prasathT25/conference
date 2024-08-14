import Footer from "../core/Footer";
import Header from "../core/Header";
import Callforpaper from "../shared/components/Call/Callforpaper";
import Papertypes from "../shared/components/Call/Papertypes";
import Conferencelocation from "../shared/components/Registration/Conferencelocation";



export default function Call() {
  return (
    <div>
      <Header />
      <Callforpaper />
      <Papertypes />
      <Conferencelocation />
      <Footer />
    </div>
  )
}
