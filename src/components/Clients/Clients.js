import React from 'react'
import { Client, ClientContain, ClientLogo, ClientP } from './ClientsElements'
import bank from '../../assets/bank.png'
import KZ from '../../assets/KZ.png'
import RF from '../../assets/RF.png'
import usaid from '../../assets/usaid.png'
import internews from '../../assets/internews.png'
import abyshata from '../../assets/abyshata.png'
import turkish from '../../assets/turkish.png'

import './Clients.css'







const Clients = ({id}) => {
    return (
        <ClientContain id={id}>
            <Client>
                <ClientLogo>
                    <img src={bank} alt="bank" className="client-logo" />
                </ClientLogo>
                <ClientP>
                1.Национальный Банк Кыргызской Республики
                Мы сняли серию исторических имиджевых роликов
                про Алыкула Осмонова, Саякбая Каралаева, Суймонкула Чокморова и Жусупа Баласагуна
                </ClientP>

                <ClientLogo>
                    <img src={KZ} alt="KZ" className="client-logo" />
                </ClientLogo>
                <ClientP>
                2. Фонд Первого Президента Казахстана
                Продвижение образа казахстанца нового времени с помощью медиа продуктов
                </ClientP>

                <ClientLogo>
                    <img src={turkish} alt="turkish" className="client-logo" />
                </ClientLogo>
                <ClientP>
                3. Antalya Film Ekibi - самая большая кинокомпания в Анталии, Турция.
                </ClientP>

                <ClientLogo>
                    <img src={RF} alt="RF"  className="client-logo"/>
                </ClientLogo>
                <ClientP>
                4. Министерство культуры РФ
                Минкульт РФ оказывает поддержку в производстве совместного кинофильма
                </ClientP>

                <ClientLogo>
                    <img src={abyshata} alt="abdyshata" className="client-logo" />
                </ClientLogo>
                <ClientP>
                5. Компания “Абдыш Ата” - сняли серии имиджевых социальных роликов
                </ClientP>

                <ClientLogo>
                    <img src={usaid} alt="usaid" className="client-logo" />
                </ClientLogo>
                <ClientP>
                6. “USAID” - сняли серию Документальных фильмов про активных людей КР
                </ClientP>

                <ClientLogo>
                    <img src={internews} alt="internews" className="client-logo" />
                </ClientLogo>
                <ClientP>
                7. “INTERNEWS”- сняли серию фильмов для детей «Аманат»
                </ClientP>
            </Client>
        </ClientContain>
    )
}

export default Clients
