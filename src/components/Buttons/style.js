import style from "styled-components";

export const Container = style.div`
display:flex;
justify-content:space-between;
width:100%;

    button {
        position:relative;
        border:none;
        outline:none;
        background-color:transparent;
        color:#89898D;
        cursor:pointer;  
        transition: all 0.2s
    }
    
    span {
        font-size:12px;
        color:#fff;
        background:#B6B6BB;
        border-radius:40%;
        padding:2px;
        position:absolute;
        top:-5px;
        left:25px;
        transition: all 0.2s
    }

    button:hover span{
        background-color:#377DDD;
    }

    button:hover{
        color:#377DDD;
    }

`;

// export const activeTab = style.button`
//   background: white;
//   ${({ active }) =>
//     activeTab &&
//     `
//     border-bottom: 2px solid red;
//     color:red;
//   `}
// `;

// export const activeTab = style.button`
//     color:red;

// `;
