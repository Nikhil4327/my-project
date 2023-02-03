import {MainComponent} from './AppStyle'
import  NavContainer  from './Components/NavBar/index';
import styled from 'styled-components';
import './index.css'
import Banner from './Components/Banner';

const App = () => {
  return (
    <MainComponent>
      <NavContainer/>
      <ImgContainer>
      <img src = "http://www.tirupationline.org/public/assets/website/images/main.jpg"></img>
      </ImgContainer>
      <Banner/>
    </MainComponent>
  );
}
export default App
const ImgContainer = styled.div`
width:100%;
height:551px;

`
