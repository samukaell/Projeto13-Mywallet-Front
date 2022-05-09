import { useContext } from 'react';
import Header from '../../components/Header'
import Transacao from '../../components/Transacao'
import TipoContext from '../../util/TipoContext';

export default function Transacoes(){

    const { tipoSelecionado } = useContext(TipoContext);

     return(
        <>
            <Header
                conteudo = {`Nova ${tipoSelecionado}`}
                temBotao={false}
            />
            <Transacao/>
        </>
     )
 }