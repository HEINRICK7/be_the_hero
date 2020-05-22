import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import Bounce from 'react-reveal/Bounce';
import { useToasts } from 'react-toast-notifications';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [ id, setId] = useState('');
    const history = useHistory(); 

    const { addToast } = useToasts();
   
    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            addToast('Falha no Login, tente novamente', { 
                appearance: 'error',
                autoDismiss: true,
               
            })
        }
    }

    return (
        <div className="logon-container">
           
            <section className="form"> 
                <Bounce left cascade>
                    <img src={logoImg} alt="Be To Hero"/>

                    <form onSubmit={ handleLogon }>
                        <h1>Faça seu logon</h1>

                        <input placeholder="Sua ID"
                         value={ id }
                         onChange= {e => setId(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041"/>
                            Ainda não tem um cadastro? 
                        </Link>

                    </form>
                </Bounce>
            </section>
            <div className='content'>
                <Bounce right cascade>
                    <img src={heroesImg} alt="Heroes"/>
                </Bounce>
            </div>
        </div>
    );
}