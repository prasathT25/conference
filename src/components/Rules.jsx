import Footer from "../core/Footer";
import Header from "../core/Header";
import Conferencelocation from "../shared/components/Registration/Conferencelocation";
import Rulesandregulations from "../shared/components/Rules/Rulesandregulations";


export default function Rules() {
  return (
    <div>
      <Header />
      <Rulesandregulations />
      <Conferencelocation />
      <Footer />
    </div>
  )
}
