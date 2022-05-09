import { BrowserRouter, Routes, Route } from "react-router-dom";
//Contexto
import { useState } from "react";
import LogadoContext from "../util/LogadoContext";
import TipoContext from "../util/TipoContext";
//Telas
import Cadastro from "../pages/Cadastro";
import Login from '../pages/Login';
import Inicio from '../pages/Inicio'
import Transacoes from "../pages/Transacoes";

export default function App(){

    //context logado
    const [login,setLogin] = useState({
        nome: "",
        token: ""
    }); 
    const [tipoSelecionado,setTipoSelecionado] = useState("");

    return (
        <>
            <TipoContext.Provider value={{tipoSelecionado,setTipoSelecionado}}>
            <LogadoContext.Provider value={{login,setLogin}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/cadastro" element={<Cadastro/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<Inicio/>}/>
                        <Route path="/transacao" element={<Transacoes/>}/>
                    </Routes>
                </BrowserRouter>
            </LogadoContext.Provider>
            </TipoContext.Provider>
        </>
    )
}
//<TipoContext.Provider value={{tipoSelecionado,setTipoSelecionado}}></TipoContext.Provider>