import style from "styled-components";

export const Container = style.div`
position:relative;
margin-bottom:15px;
    input {
        border-radius:20px;
        width:100%;
        height:45px;
        padding-left:30%;
        box-sizing:border-box;
        border:none;
        outline:none;
        background-color:#E9E9E9;
    }
    i {
        position:absolute;
        top:30%; 
        left:25%;
        color: #8C8C90;
    }
`;
