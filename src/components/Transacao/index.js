import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { postTransacao } from '../../service'
import {ThreeDots} from 'react-loader-spinner'
import { StyledMain } from "./styles";
import TipoContext from '../../util/TipoContext';
import LogadoContext from '../../util/LogadoContext';

export default function Transacao(){

    //Context
    const { tipoSelecionado } = useContext(TipoContext);
    const { login } = useContext(LogadoContext);

    const [habilitarCad,setHabilitarCad] = useState(false);
    //Estados do form
    const[nome,setNome] = useState("");
    const[valor,setValor] = useState(0);

    const navigate = useNavigate();

    async function handleSubmitTransicao(e){
        e.preventDefault();
        
        setHabilitarCad(!habilitarCad);
        
        console.log("Objeto a ser enviado->",{
            tipo: tipoSelecionado,
            nome: nome,
            valor: parseFloat(valor)
        }," e o token ->",login.token);

        const retorno = await postTransacao({
            tipo: tipoSelecionado,
            nome: nome,
            valor: parseFloat(valor)
        },login.token);


        if(retorno !== null){
            setHabilitarCad(!habilitarCad);
            navigate('/');
        }else{
            alert("Por favor preencha os campos novamente.");
        }
        

        console.log("Valor->",valor);
    }

    return(
        <StyledMain>
            <form onSubmit={handleSubmitTransicao}>
                <input className="input-nome" type="text"  placeholder="Nome"  required
                    value={nome} onChange={e => setNome(e.target.value)}
                />
                <input className="input-nome" type="number"  placeholder="Nome"  required
                    value={valor} onChange={e => setValor(e.target.value)}
                />

                <button className="botao-input" type='subimit'>
                    {habilitarCad ? 
                        <ThreeDots color="#FFFFFF" height={30} width={30} />
                        : 
                        'Cadastrar'
                    }
                </button>
            </form>
        </StyledMain>
    )
}