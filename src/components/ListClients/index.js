import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Client from './Client';
import { Link } from 'react-router-dom';
import SearchField from '../Search';


function ListClient () {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get(
            'http://avaliacao.conecti.com.br/front/api/clients'
            +(search.length > 0 ? `?text=${search}` : '')
        )
        .then((res)=>{
            setClients(res.data);
        })
        .catch()
    }, [search])

    return (
        <div className="landing-page">
        <SearchField search={search} setSearch={setSearch}/>
        <Link to="/add">
            <button className="add-button">
                + Adicionar Empresa
            </button>
        </Link>
            {clients.map((client)=>{
                return(
                    <Client client={client}/>
                );
            })}
        </div>
    )
}

export default ListClient;
