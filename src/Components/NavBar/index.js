import styled from "styled-components"
import { NavBar,Container ,RightCont} from "./style"
import './style.css'
const NavContainer = () =>{
    return (
        <NavBar>
        <Container>
            <Logo>
                <a><img src = 'http://www.tirupationline.org/public/assets/website/images/logo-2.png'></img></a>
            </Logo>
             <RightCont>
             <Home><a href = '/'>Home</a></Home>
            <Important>   <a href = '/'>Important</a></Important>
            <Packages>   <a href = '/'>Packages</a></Packages>
            <Pujas>   <a href = '/'>Pujas/Sevas</a></Pujas>
            <TirupatiDarshanTicket><a href = '/'>Tirupati Darshan Ticket</a>
            </TirupatiDarshanTicket>
            <ContactUs><a href = '/'>Contact Us</a></ContactUs>
             </RightCont>
        </Container>
        </NavBar>
    )
}
export default NavContainer
const commonStyle = styled.div`
color: #242424;
padding:15px;`
const Logo = styled.div`
color: #242424;
padding:15px;
display: flex;
justify-content: center;
align-items: center;`

const Home = commonStyle
const Important = commonStyle
const Packages = commonStyle
const Pujas = commonStyle
const TirupatiDarshanTicket = commonStyle
const ContactUs = commonStyle

