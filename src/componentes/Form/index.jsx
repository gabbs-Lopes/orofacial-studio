import React, { useState } from 'react';
import './Form.modules.scss'
import InputMask from 'react-input-mask';

export default function Form() {

    const [value, setValue] = useState('');

    function handleChangeTextarea(event) {
        setValue(event.target.value);
    }

    return (

        <form action="" className='form'>
            <div className='Collum'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name='nome' id='nome' autoComplete='name' />
            </div>
            <div className='form__two row'>
                <div className='form__two-email Collum'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' id='email' autoComplete='email'/>
                </div>
                <div className='form__two-tel Collum'>
                    <label htmlFor="tel">Telefone:</label>
                    <InputMask id='tel' mask="(99) 99999-9999" maskChar=" " autoComplete='tel'>
                        {(inputProps) => <input type="text" {...inputProps} />}
                    </InputMask>
                </div>
            </div>
            <div className='Collum'>
                <label htmlFor="message">Mensagem:</label>
                <textarea
                    id='message'
                    style={{ minWidth: "100%", maxWidth: "100%", maxHeight: '200px' }}
                    rows={4}
                    value={value}
                    onChange={handleChangeTextarea}
                />
            </div>
            <button className='form__btn'>Enviar</button>
        </form>
    )
};