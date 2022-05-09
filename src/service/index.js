import axios from "axios";

export const postCadastro = async (objeto) =>{
    const URL = 'http://localhost:5000/cadastro';
    
    try {
        const resposta = await axios.post(URL,objeto);
        const {data} = resposta;
        console.log("Cadastrado");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
    
}

export const postLogin = async (objeto) =>{
    const URL = 'http://localhost:5000/login';
    
    try {
        const resposta = await axios.post(URL,objeto);
        const {data} = resposta;
        console.log("Logado!");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
    
}

export const getTransacoes = async (token) =>{
    const URLSAIDA = 'http://localhost:5000/saida';
    const URLENTRADA = 'http://localhost:5000/entrada';
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        //Lista de trasacoes do tipo saida
        const respostaSaida = await axios.get(URLSAIDA,config);
        const saida = respostaSaida.data;
        //Lista de trasacoes do tipo entrada
        const respostaEntrada = await axios.get(URLENTRADA,config);
        const entrada = respostaEntrada.data;

        let trasacoes = saida.concat(entrada);

        console.log("Suas Transacoes ->", trasacoes);
        return trasacoes;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
}

export const postTransacao = async (objeto,token) =>{
    const URL = 'http://localhost:5000/inserir';

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const resposta = await axios.post(URL,objeto,config);
        const {data} = resposta;
        console.log("Deu bom, Trasaçao feita com sucesso ->", data);
        const retorno = "Ok!"

        return retorno;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
}

export const postDeslogar = async (token) =>{
    const URL = 'http://localhost:5000/deslogar';

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const resposta = await axios.post(URL,config);
        const {data} = resposta;
        console.log("Usuario foi deslogado ->", data);
        const retorno = "Ok!"

        return retorno;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
}
