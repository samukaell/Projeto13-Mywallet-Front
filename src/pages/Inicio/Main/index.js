import { IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";
import { StyledMain } from "./styles";
import { useNavigate } from 'react-router-dom'
import { useContext,useState,useLayoutEffect } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import { getTransacoes } from '../../../service';
import TipoContext from "../../../util/TipoContext";


export default function Main(){
    //array de habitos
    const [trasacoes,setTrasacoes] = useState([]);
    //controle de atualização da pagina
    const [atualizar,setAtualizar] = useState(true);
    //token 
    const { login } = useContext(LogadoContext);
    //definir o tipo de transacao
    const { setTipoSelecionado } = useContext(TipoContext);

    const navigate = useNavigate();

    function calcularTotal(){
        let valorTotal = 0;

        trasacoes.map(trasacao=>{
            if(trasacao.tipo === "entrada"){
                valorTotal = valorTotal+trasacao.valor;
            }else{
                valorTotal = valorTotal-trasacao.valor;
            }
            return valorTotal;
        })
        return valorTotal;
    }

    function selecionarTipo(tipo){
        console.log("Clicou!");
        setTipoSelecionado(tipo);
        navigate('/transacao');
    }

    async function carregarTransacoes(){
        const retorno = await getTransacoes(login.token);
        setTrasacoes(retorno);
    }

    useLayoutEffect(() => {
        carregarTransacoes();
    }, [atualizar]);

    if(trasacoes.length > 0){
        return(
            <StyledMain>
                <div className="campo-exibicao">
                    <div className="espaco"></div>
                    {trasacoes.map((trasacao,index)=>{
                        return(
                            <div className="caixa-trasacao" key={index}>
                                <div className="caixa-nome">
                                    <p className="data">{trasacao.data} </p>
                                    <p className={`trasacao ${trasacao.tipo}`}>-{trasacao.nome}</p>
                                </div>
                                <p className={`trasacao-preco ${trasacao.tipo}`}>{trasacao.valor}</p>
                            </div>
                        )
                    })}
                    <div className="caixa-total">
                        <p className="texto-saldo">SALDO</p>
                        {calcularTotal() > 0 ?
                            <p className="total-positivo">{calcularTotal()}</p>
                            :
                            <p className="total-negativo">{calcularTotal()}</p>
                        }
                    </div>
                </div>
                
                <div className="caixa-botoes">

                        <div className="botao botao-entrada" onClick={()=>{selecionarTipo("entrada")}}>
                            <IoAddCircleOutline className="icone-add"/>
                            <p>Nova entrada</p>
                        </div>

                        <div className="botao botao-saida" onClick={()=>{selecionarTipo("saida")}}>
                            <IoRemoveCircleOutline className="icone-remove"/>
                            <p>Nova saída</p>
                        </div>

                </div>
            </StyledMain>
        )
    }else{
        return(
            <StyledMain>
                <div className="campo-exibicao nada">
                    <p className="mensagem">Não há registros de entrada ou saída</p>
                </div>
                
                <div className="caixa-botoes">
                    <button className="botao-entrada" onClick={()=>{selecionarTipo("entrada")}}>
                        <IoAddCircleOutline className="icone-add"/>
                        <p>Nova entrada</p>
                    </button>
                    <button className="botao-saida" onClick={()=>{selecionarTipo("saida")}}>
                        <IoRemoveCircleOutline className="icone-remove"/>
                        <p>Nova saída</p>
                    </button>
                </div>
            </StyledMain>
        )
    }
}