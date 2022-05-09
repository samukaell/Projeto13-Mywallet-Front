import styled from "styled-components";

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    .campo-exibicao{
        width: 90%;
        height: 60%;
        background: #FFFFFF;
        border-radius: 5px;

        display: flex;
        flex-direction: column;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }

    .nada{
        align-items: center;
        justify-content: center;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #868686;
    }

    .caixa-botoes{
        width: 90%;
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
    }
    .botao{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        padding: 10px;
        width: 155px;
        height: 114px;
        border-radius: 5px;
        border: none;
        background: #A350D6;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
    }

    .caixa-trasacao{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .caixa-nome{
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .data{
        color: #C6C6C6;
    }

    .trasacao-preco{
        margin-right: 10px;
    }

    //cor saida
    .saida{
        color: #C70000;
    }
    //cor entrada
    .entrada{
        color: #03AC00;
    }
    .caixa-total{
        height: 100%;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .texto-saldo{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
    }
    .total-positivo{
        margin-bottom: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: #03AC00;
    }
    .total-negativo{
        margin-bottom: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: #C70000;
    }


    //espaco em cima
    .espaco{
        height: 10px;
    }
`;

export { StyledMain }