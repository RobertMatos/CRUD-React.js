import React from 'react'
import { Link } from 'react-router-dom';
import {Delete, Edit} from '@material-ui/icons';
import axios from 'axios';


function Client (props) {
  const client = props?.client;
  
  const handleClick = (id) =>{
    axios.delete(
      `http://avaliacao.conecti.com.br/front/api/clients?id=${client?.id}`
    )
    .then()
    .catch()
  }

  return (
    <div className="client-card">
      <div>
        <h3>{client?.name}</h3>
        <p>{`CNPJ: ${client?.cnpj} | e-mail: ${client?.email}`}</p>
      </div>
      <div className="buttons">
        <Link to="/clients/edit">
          <Edit client={client} className="edit" size={24}></Edit>
        </Link>

        <Delete className="delete" onClick={handleClick(client?.id)}></Delete>
      </div>
    </div>
  )
}

export default Client;
