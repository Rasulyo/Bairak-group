import styled from 'styled-components'

export const FounderContain = styled.div `
text-align: center;
z-index: 1;
width: 100%;
max-height: 100%;
margin: 0 auto;
max-width: 1400px;
// @media screen and(max-width: 768px) {
//     margin-top: 150px;
// }
`

export const Found = styled.div`
display: flex;
justify-content: space-evenly;
`

export const MemberOne = styled.div`
// background-color: rgb(209,210,212);
position: relative;
max-width: 480px;
width: 100%;
max-height: 350px;
height: 100%;
border-radius: 15%;
@media screen and (max-width: 768px){
    display: flex;
    flex-wrap: wrap;
}
`
// export const MemberTwo = styled.div`
// // background-color: rgb(209,210,212);
// position: relative;
// max-width: 480px;
// width: 100%;
// height: 350px;
// height: 100%;
// border-radius: 15%;
// @media screen and (max-width: 768px){
//     display: flex;
//     flex-wrap: wrap;
// }
// `

export const MemberText = styled.p`
background-color: rgb(209,210,212);
diplay: flex;
text-align: justify;
font-size: 18px;
// height: 150px;
// height: 100%;
padding: 15px;
@media screen and (max-width: 768px){
    font-size: 14px;
    height: 220px;
}
`
export const MemberPhoto = styled.div`
max-width: 600px;
display: flex;
position: absolute;
top: 45%;
left: 40%;
z-index: 10;
@media screen and (max-width: 768px){
    top: 60%;
}
`

export const MemberTextTwo = styled.p`
font-size: 20px;
text-align: center;
`

export const MemberSpan = styled.span`
font-size: 16px;
text-align: center;
`