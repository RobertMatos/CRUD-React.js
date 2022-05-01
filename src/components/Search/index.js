import React, {useState} from 'react'
import {Search} from '@material-ui/icons';


function SearchField (props) {
  const {search, setSearch} = props;
  const [text, setText] = useState('');

  return (
    <div className="search-container">
      <input placeholder="Buscar Empresa" type="text" onChange={(e)=>{
        setText(e.target.value);
      }}>
      </input>
      <button onClick={()=>setSearch(text)}>
        <Search/>
      </button>
    </div>
  )
}

export default SearchField;
