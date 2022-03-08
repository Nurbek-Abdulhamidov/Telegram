import style from "styled-components";

export const Card = style.div`
display:flex;
align-items:center;
margin:20px 0;
border-bottom:1px solid #E6E6E8;
cursor:pointer;
    img {
        border-radius:50%;
        width:60px;
        height:60px;
        object-fit:cover;
        margin-right:10px;
    }
`

export const ItemText = style.p`
   font-size:13px;
   font-weight:4000;
`