import styled from 'styled-components'

export const ClientContain = styled.div `
text-align: center;
z-index: 1;
width: 100%;
max-height: 100%;
margin: 0 auto;
max-width: 1080px;
padding-top: 80px;
// @media screen and(max-width: 768px) {
//     margin-top: 150px;
// }
`


export const Client = styled.div`
display: flex;
text-align: center;
flex-direction: column;
`

export const ClientLogo = styled.div`
display: flex;
justify-content: center;
max-height: 100px;
height: 100%;
max-width: 100%;
`
export const ClientP = styled.p`
font-size: 16px;
font-family: Arial, san-serif;
@media screen and(max-width: 768px){
    font-size: 13px;
}
`