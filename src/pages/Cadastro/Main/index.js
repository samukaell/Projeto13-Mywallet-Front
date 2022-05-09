import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
import { postCadastro } from '../../../service';

//Styles
import { StyledCadastro } from './styles';

export default function Main(){

    const [habilitarCad,setHabilitarCad] = useState(false);
    //info do cadastro
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navigate = useNavigate();

    async function handleSubmitCadastro(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);

        const retorno = await postCadastro({
            email: email,
            nome: nome,
            senha: senha
        });

        if(retorno !== null){
            setHabilitarCad(!habilitarCad);
            navigate('/');
        }else{
            alert("Por favor preencha os campos novamente.");
        }
        
    }

    return(
        <StyledCadastro>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmitCadastro}>
                <input className="input-nome" type="text"  placeholder="Nome"  required
                    value={nome} onChange={e => setNome(e.target.value)}
                />
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
                        'Cadastrar'
                    }
                </button>
            </form>

            <Link to={"/login"}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </StyledCadastro>
    )
}