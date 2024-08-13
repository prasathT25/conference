import Footer from "../core/Footer";
import Header from "../core/Header";
import Callforpaper from "../shared/components/Call/Callforpaper";
import Papertypes from "../shared/components/Call/Papertypes";



export default function Call() {
  return (
    <div>
      <Header />
      <Callforpaper />
      <Papertypes />
      <Footer />
    </div>
  )
}
