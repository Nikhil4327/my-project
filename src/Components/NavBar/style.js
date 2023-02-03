import styled from "styled-components"

export const NavBar = styled.div`
background-color : #FFAA33;
height : 82px;
width:100%;
position:sticky;
top:0px;
z-index:1000;

`
export const Container = styled.div`
  height:100%;
  margin: 0px 156px;
  display:flex;
  justify-content:space-between;
  align-content:center;
  letter-spacing: 0px;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  opacity: 1;
  font-family: 'Poppins', sans-serif;
  
  

`
export const RightCont = styled.div`
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  opacity: 1;
  display:flex;
  align-items:center;
  gap:8px;
  font-family: 'Poppins', sans-serif;`