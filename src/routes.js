import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ListClient from "./components/ListClients";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";


const Router = () => {
	return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" exact element={<ListClient/> }/>
                <Route path="/add" exact element={<AddClient/>} />
                <Route path="/clients/edit" exact element={<EditClient/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
