import React from 'react'
import "./Showreel.css"
import { ContentDesc,Vid, VideoContainer, VideoContent } from './VideoElements'

function Alykul() {
    return (
        <Vid>
            
        <VideoContainer>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/t2KtSGUOmFA" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                   Ролик Молодость
                </ContentDesc>
            </VideoContent>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/8S2-a2Q_KYs" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                    Жусуп Баласагын
                </ContentDesc>
            </VideoContent>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/9fSKOFe2bCw"  title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                    Алыкул Осмонов
                </ContentDesc>
            </VideoContent>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/jqy18V6_-0Y" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                CҮЙМӨНКУЛ ЧОКМОРОВ
                </ContentDesc>
            </VideoContent>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/Nectjdlluhs" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                    Саякбай Каралаев
                </ContentDesc>
            </VideoContent>
            <VideoContent>
                <iframe src="https://www.youtube.com/embed/A0Czv1mjzs4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <ContentDesc>
                    Эки Баатыр
                </ContentDesc>
            </VideoContent>
            
        </VideoContainer>
        </Vid>


    )
}

export default Alykul
