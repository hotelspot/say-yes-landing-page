import React from "react";
import {
    Center,
    CommonPartners,
    Container, PartnersImages,
    PartnersTitle,
    Strategy,
    StrategyImage,
    StrategyTitle,
    Wrapper
} from "./Partners.styled";
import {
    BoCerba, BusinessWoman,
    CentrumUbezpieczenPolskich,
    HiltonGarden,
    Hotelspot, Integracja,
    Kancelaria, Ngo,
    PrimeTime
} from "../../assets/partners";

const commonPartners = [
    Hotelspot,BoCerba,PrimeTime,CentrumUbezpieczenPolskich,
    Kancelaria,
]

const commonMediaPartners = [
    Integracja,BusinessWoman,Ngo
];
export const Partners = () =>{
    return <Container>
        <Wrapper>
            <Strategy>
                <StrategyTitle>Partner Strategiczny</StrategyTitle>
                <StrategyImage alt="strategy" src={HiltonGarden}/>
            </Strategy>
            <CommonPartners>
                <PartnersTitle>Partnerzy</PartnersTitle>
                <PartnersImages>
                    {commonPartners.map(e => <Center key={e}>
                        <img alt="" src={e}/></Center> )}
                </PartnersImages>
            </CommonPartners>
            <CommonPartners>
                <PartnersTitle>Patronat medialny nad konferencją sprawują</PartnersTitle>
                <PartnersImages>
                    {commonMediaPartners.map(e => <Center key={e}>
                        <img src={e} alt=""/></Center> )}
                </PartnersImages>
            </CommonPartners>
        </Wrapper>
    </Container>
}
