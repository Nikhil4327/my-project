   
import './famousTemple.css'
   const FamousTempleSection = () =>{

   const famousTempleArr = [
    {
        title : 'Padmavati Temple, Tirupati',
        src: 'http://www.tirupationline.org/public/assets/website/images/festival_01.jpg'
    },
    {
        title: 'Paap Vinashini, Tirupati',
        src: 'http://www.tirupationline.org/public/assets/website/images/festival_02.jpg'
    },
    {
        title: 'Golden Temple, Vallore',
        src: 'http://www.tirupationline.org/public/assets/website/images/festival_03.jpg'
    },
    {
        title: 'Kanchipuram Temple',
        src: 'http://www.tirupationline.org/public/assets/website/images/festival_04.jpg'
    }
   ]
    return (
        <div className="container">
            <h1 className='heading'>Famous Temples</h1>
            <p className='descriptiom'>Tirupati Balaji Temple - a holy journey of revered sites in Andhra Pradesh takes you to four sacred places namely Sri Govindraja Swamy Temple, Sri Kapileswara Swami Temple, Sri Kodandarama swami Temple Sri Kalyana Venkateswara Swami and Sri Padmavathi Ammavari.</p>
            <div className='flex-container'>{
             famousTempleArr.map(({title,src}) => {
                return (
                    <div className='childCont'>
                    <div className='famousImage'><img className='img' src = {src}></img></div>
                    <h3 className='famousTitle'>{title}</h3>
                    </div>
                )
             })
           }
            </div>
        </div>
    )
   }

   export default FamousTempleSection