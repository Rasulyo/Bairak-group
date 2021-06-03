import styled from 'styled-components'


export const Foo = styled.div`
background-color: rgb(209,210,212);
max-height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1rem;
z-index: 10;
@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const FooContainer = styled.div`
width: 100%;
max-width: 1080px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;

`

export const FooContact = styled.div`
background-color: gray;
color: white;
display: flex;
justify-content: space-between;
font-size: 16px;
`
export const ContactP = styled.p`
color: white;
padding: 0 20px;
`
export const FooP = styled.p`
    color: rgb(64, 64, 65);
    text-align: center;
    max-height: 400px;
    font-size: 32px;
    font-weight: 500;
`



