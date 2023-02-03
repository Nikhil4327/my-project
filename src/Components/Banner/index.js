
import './bannerstyle.css'
import DetailsComp from '../DetailsComponent'
import FamousTempleSection from '../FamousTemples'
const Banner = () =>{

   const detailsArr = [ //used to store information of horizontal components for a cleaner code
    {    title:'Delhi Tirupati Flight Tour',
        src: 'http://www.tirupationline.org/public/assets/website/images/packages_01.jpg',
        duration: '01 Nights/02 days',
        points: ' Swamy Temple or Lord Balaji, Sri Bhu Varaha Swamy temple, Sri Bedi Anjaneya Swamy Temple, Alamelumangapuram - Padmavati Temple, Sri Govindarajaswami Temple, Sri Lakshmi Narasimhan Temple and etc.'
    },
    {   title:'Tirupati Rameshwaram Tour',
        src: 'http://www.tirupationline.org/public/assets/website/images/packages_02.jpg',
        duration: '06 Nights/07 days',
        points: ' Padmavati temple, Govind Tirumal Temple, Kapila tirth, Tirupati Balaji Temple, Akash ganga, paap vinashni temple, Five Rathas Arjuna’s Penance and etc.',
    },
    {   title:'South India Temple Tour',
        src: 'http://www.tirupationline.org/public/assets/website/images/packages_03.jpg',
        duration: '07 Nights/08 days',
        points: ' Padmavati temple, Govind Tirumal Temple, Kapila tirth, Tirupati Balaji Temple, Akash ganga, paap vinashni temple, Five Rathas Arjuna’s Penance and etc.'
    }
    ]
    
 return (
    <div className='banner'>
        <div className='topComp'>
        <h1><b>Best Package For Tirupati Balaji</b></h1>
    <p>Now make your trip to <b>Tiruapti Balaji</b> with us if you want to make your trip amazing. We are one of the leading and trustworthy tour operator which organizes Tirupati Balaji Darshan Booking, Tirupati Balaji Package, Tiruapti Balaji complete package for your family at very cheapest cost. Our Tour starts daily from chennai ,Tirupati , Bangalore , Hyderabad, Mumbai and Gujarat . We also offer best packages for Tirupati Balaji Darshan by Air and Train.</p>
        </div>
     <DetailsComp detailsArr = {detailsArr}></DetailsComp>   
     <FamousTempleSection></FamousTempleSection>
    </div>
 )

}
export default Banner