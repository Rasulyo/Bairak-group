import styled from 'styled-components'

export const AboutContain = styled.div`
text-align: center;
z-index: 1;
width: 100%;
max-height: 100%;
margin: 0 auto;
max-width: 1080px;
padding-top: 60px;
`

export const ContainContext = styled.div`
background: linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
text-align: center;
`
export const AboutP = styled.p`
font-size: 16px;
text-align: justify;
margin: 10px 50px 1px;
padding: 15px 0 10px;
@media screen and (max-width: 768px){
    font-size: 13px;
}
`