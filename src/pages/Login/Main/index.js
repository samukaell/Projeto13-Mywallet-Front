import { Link,useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
import LogadoContext from '../../../util/LogadoContext';

import { postLogin } from '../../../service';

//Styles
import { Styledlogin } from './styles';

export default function Main(){

    //Contexto = token
    const { setLogin } = useContext(LogadoContext);

    const [habilitarCad,setHabilitarCad] = useState(false);
    //info do cadastro
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navigate = useNavigate();

    async function handleSubmitLogin(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);

        const retorno = await postLogin({
            email: email,
            senha: senha
        });

        if(retorno !== null){
            setHabilitarCad(!habilitarCad);
            setLogin(retorno);
            navigate('/');
        }else{
            alert("Por favor preencha os campos novamente.");
            document.location.reload(true);
        }
        
    }

    return(
        <Styledlogin>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmitLogin}>
                <input className="input-email" type="email"  placeholder="email"  required
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <input className="input-senha" type="password"  placeholder="senha"  required
                    value={senha} onChange={e => setSenha(e.target.value)}
                />

                <button className="botao-input" type='subimit'>
                    {habilitarCad ? 
                        <ThreeDots color="#FFFFFF" height={30} width={30} />
                        : 
                        'Entrar'
                    }
                </button>
            </form>

            <Link to={"/cadastro"}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Styledlogin>
    )
}