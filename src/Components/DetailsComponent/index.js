

import './style.css'
import styled from 'styled-components'
const DetailsComp = ({detailsArr}) =>{

return (
    <div className = 'container'>
        <div className='flex-cont'>
            {
         detailsArr.map(({title,src,duration,points}) =>{
         return (
        <div className='cont'>
        <div className = 'image'><img className = 'innerImage' src={src}></img></div>
        <div className='titleStyle'>{title}</div>
        <div class="text"><b>Duration:</b> {duration}
        <span><b>Points:</b>
        {points}</span>
         </div>
        <div className='buttonCont'>
            <Button txt = 'Read'>Read Itinerary</Button>
            <Button txt = 'book'>Book Now</Button>
        </div>
        
        </div>
        
    )
})
            }
        </div>
    </div>
)


}
const Button = styled.div`
color: #FFFFFF;
background-color: ${props => props.txt === 'Read' ? '#0065bd' : '#242424'};
border-radius: 30px;
padding: 7px 15px;
margin-top: 10px;
font-size:16px;
font-family: 'Open Sans', sans-serif;
cursor:pointer;
border: ${props => props.txt === 'Read' ? 'solid  #0065bd' : 'solid  #242424'};
transition : color 0.5s ,background-color 0.5s;
&:hover{
    background-color:#FFC300;
    color: ${props => props.txt === 'Read' ? '#0065bd' : '#242424'};

};


`
export default DetailsComp;