import React from 'react';
import './Contato.modules.scss'
import NavBar from 'componentes/NavBar';
import Form from 'componentes/Form';
import Maps from 'componentes/Maps';

export default function Contato() {

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <section className="contato">
                    <h2 className="contato__titulo">Contato</h2>
                    <p>*imagem com direitos autorais</p>
                </section>

                <section className="info">
                    <h1 className="info_h1">Entre em contato conosco</h1>
                    <p className="info_texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        exercitationem. Debitis quas asperiores nobis hic tempore
                        laudantium voluptatibus impedit expedita animi officiis id
                        eius vero, ad iure natus!</p>
                </section>

                <section className="contato-container">
                    <div className="left">
                        <Form />
                    </div>
                    <div className="right">
                        <p>bobao</p>
                        <Maps />
                    </div>
                </section>
            </main>
        </>
    );
};