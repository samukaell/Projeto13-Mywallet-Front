
import styled from "styled-components";

const Styledlogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 95px;
        margin-bottom: 28px;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        margin-bottom: 13px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }

    button{
        margin-bottom: 13px;
        width: 326px;
        height: 46px;
        background: #A350D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }
    
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
    }
`;

export {Styledlogin}