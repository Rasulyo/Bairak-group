import styled from 'styled-components'

export const AboutContain = styled.div`
text-align: center;
z-index: 1;
width: 100%;
// height: 100vh;
margin: 0 auto;
max-width: 1080px;
padding-top: 60px;
`

export const ContainContext = styled.div`
background: linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
text-align: center;
@media screen and (max-width:540px ){
    // height: 50vh;
}
`
export const AboutP = styled.p`
height: 43vh;
font-size: 16px;
text-align: justify;
margin: 10px 10px 1px;
padding: 10px 0 5px;
@media screen and (max-width: 768px){
    font-size: 13px;
}
`