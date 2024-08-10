
import Header from '../core/Header'
import Footer from '../core/Footer'
import Contactpage from '../shared/components/Contactus/Contactpage'
import Contactperson from '../shared/components/Contactus/Contactperson'
import Map from '../shared/components/Contactus/Map'

export default function ContactUs() {
    return (
        <div>
            <Header />
            <Contactpage/>
            <Contactperson/>
            <Map/>
               
                <Footer/>
               
        </div>


    )
}
