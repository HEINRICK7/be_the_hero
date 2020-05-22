import React ,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import Bounce from 'react-reveal/Bounce';
import { useToasts } from 'react-toast-notifications';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    const { addToast } = useToasts();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try {
         const response = await api.post('ongs', data);

            addToast(`Seu ID de acesso: ${response.data.id}`, {
                appearance: 'success',
                autoDismiss: true
            });   

            history.push('/');
        } catch(err) {
            addToast('Erro no cadastro, tente novamente.', {
                appearance: 'error',
                autoDismiss: true
            })
        }
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <Bounce rigth cascade >
                        <img src={logoImg} alt="Be The Hero"/>

                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Já tem um cadastro ? 
                        </Link>
                    </Bounce>
                </section>
                <Bounce rigth cascade>
                    <form onSubmit={ handleRegister }>
                        <input placeholder="Nome da ONG"
                         value={ name } 
                         onChange={ e => setName(e.target.value)}
                        />
                        <input type= 'email' placeholder="E-mail"
                          value={ email } 
                          onChange={ e => setEmail(e.target.value)}
                        />
                        <input placeholder="WhatsApp"
                          value={ whatsapp } 
                          onChange={ e => setWhatsapp(e.target.value)}
                        />
        
                        <div className="input-group">
                        <input placeholder="Cidade"
                          value={ city } 
                          onChange={ e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 80}}
                          value={ uf } 
                          onChange={ e => setUf(e.target.value)}
                        />
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </Bounce>
            </div>
        </div>
    )
}