import React, { useState } from "react";

import { Avatar } from 'primereact/avatar';

import Logo from '../../assets/tambankMini.svg';

import '../../styles/pages/Home/style.css';

import { CardButton } from "../../components/card-button/CardButton";

export const Home: React.FC = () => {
    const [viewBalance, setViewBalance] = useState(false);

    return (
        <div className="animate__animated animate__fadeIn animate__faster container-home">
          <section className="first-section-home">
            <div className="first-div">
                <img src={Logo}/>
            </div>

            <div className="second-div">
                <div>
                    <Avatar icon="pi pi-user" size="xlarge" style={{ backgroundColor: '#fff', color: '#375740' }} shape="circle" />
                </div>

                <div className="second-div-btn">
                    <button className="button-eye"><i className="pi pi-cog" style={{fontSize: '1.4rem'}}/></button>
                    <button className="button-question"><i className="pi pi-question"/></button>
                </div>
            </div>  

            <div className="third-div">
                <span className="title-hi">Olá, Mauricio Rocha</span>
                <span className="agency">Agência: 1234, Número da Conta: 00001-9</span>
            </div>
          </section>  

          <section className="second-section-home">
            <div className="container-subtitle">
                <div className="div-one-subtitle">
                    <span>Saldo</span>
                </div>
                <div className="div-second-subtitle">
                    <span>{viewBalance ? "************" : "R$ 1.000.000"}</span>
                    <button onClick={() => viewBalance ? setViewBalance(false) : setViewBalance(true)}><i className={viewBalance ? "pi pi-eye-slash" : "pi pi-eye"} style={{fontSize: '1.3rem'}}/></button>
                </div>
                <div className="third-div-subtitle">
                    <span>Opções</span>
                </div>
            </div>

            <div className="container-all-buttons"></div>

            <div className="container-all-options">
                <CardButton text="Transferência" icon="tabler:arrows-diff"/>
                <CardButton text="Pagar" icon="icon-park-outline:pay-code-two"/>
                <CardButton text="Pix" icon="ic:baseline-pix"/>
                <CardButton text="Cartões" icon="ic:outline-credit-card"/>
                <CardButton text="Agendamento" icon="mdi:calendar"/>
                <CardButton text="Suporte" icon="material-symbols:support-agent-sharp"/>
                <CardButton text="Extrato" icon="mdi:file"/>
                <CardButton text="Investimento" icon="grommet-icons:money"/>
                <CardButton text="Empréstimo" icon="fluent-mdl2:money"/>
                <CardButton text="Agências" icon="mdi:bank"/>
                <CardButton text="Benefícios" icon="fa6-solid:hand-holding-dollar"/>
                <CardButton text="Pesquisar" icon="material-symbols:search"/>
            </div>
          </section>
        </div>
    )
}