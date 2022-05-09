import styled from "styled-components";

const StyledMain = styled.header`

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
        width: 326px;
        height: 46px;

        background: #A350D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
    }
`;

export {StyledMain}