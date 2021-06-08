import styled from 'styled-components';

export const Vid = styled.nav`
    background: #fff;
    margin-top: 20px;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
    }
`

export const VideoContainer = styled.div`
max-width: 1080px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
font-family: SegoeUI-Light;
@media screen and (max-width: 768px){
    transition: 0.8s all ease;
    display: block;
    // text-align: center;
    // align-items:center;
    // justify-content: center;
    // margin: 0 auto;
}
`

export const VideoContent = styled.div`
    max-width: 480px;
    width: 100%;
    max-height: 480px;
    height: 100%;
    border-radius: 5px;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 968px){
        transition: 0.8s all ease;
        max-width: 760px;
        width: 100%;
        margin: 0 auto;

        // padding: 0 5px;
    }

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        max-width: 660px;
        width: 100%;
        // margin: 0 auto;
    }
`

export const ContentDesc = styled.p`
font-size: 16px;
text-align: justify;
margin: 0 0 10px 0;
@media screen and (max-width: 768px){
   text-align: center;
   font-size: 13px;
}
`