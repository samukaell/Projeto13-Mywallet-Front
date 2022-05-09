import { useContext } from 'react';
import LogadoContext from '../../util/LogadoContext';

import Main from "./Main";
import Header from '../../components/Header'

export default function Login(){

    const { login } = useContext(LogadoContext);

    return(
        <>
            <Header
                conteudo = {`Olá, ${login.nome}!`}
                temBotao={true}
            />
            <Main/>
        </>
    );
}