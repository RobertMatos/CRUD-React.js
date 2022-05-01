import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function EditClient (props) {
  const client = props?.client;
  const [clientName, setClientName] = useState(client?.name);
  const [clientEmail, setClientEmail] = useState(client?.email);
  const [clientCnpj, setClientCnpj] = useState(client?.cnpj);

    const putData = () => {
        axios.put(`http://avaliacao.conecti.com.br/front/api/clients?id=${client?.id}`, {
            clientName,
            clientEmail,
            clientCnpj
        })
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div className="container">
        <h3>Edite a empresa</h3>
        <div className="form">
            <div className="form-field">
                <label>Nome da empresa</label>
                <input 
                    placeholder="Nome da empresa" 
                    type="text" 
                    onChange={(e) => setClientName(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label>E-mail</label>
                <input 
                    placeholder="e-mail da empresa" 
                    type="email" 
                    onChange={(e) => setClientEmail(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label>CNPJ</label>
                <input 
                    placeholder="CNPJ da empresa" 
                    type="number" 
                    onChange={(e) => setClientCnpj(e.target.value)}
                />
            </div>
            <Link to="/">
                <button 
                    type="submit" 
                    className="submit-button" 
                    onClick={putData}
                >
                    Enviar
                </button>
            </Link>
        </div>
    </div>
  )
}

export default EditClient;
