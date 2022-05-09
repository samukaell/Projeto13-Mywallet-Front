import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import LogadoContext from "../../util/LogadoContext"
import { postDeslogar } from '../../service';
import { IoExitOutline } from "react-icons/io5";
import { StyledHeader } from "./styles";

export default function Main(props){
    //token 
    const { login } = useContext(LogadoContext);

    const navigate = useNavigate();

    const {conteudo, temBotao} = props;

    async function deslogar(){
        const retorno = await postDeslogar(login.token);
        console.log("O usuario saiu");
        //navigate('/');
    }

    if(temBotao){
        return(
            <StyledHeader>
                <div className="caixa-header">
                    <p>{conteudo}</p>
                    <IoExitOutline className="botao-sair" onClick={()=>{deslogar()}}/>
                </div>
            </StyledHeader>
        );
    }else{
        return(
            <StyledHeader>
                <div className="caixa-header">
                    <p>{conteudo}</p>
                </div>
            </StyledHeader>
        );
    }
}