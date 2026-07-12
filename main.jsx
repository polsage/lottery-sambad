.search-box{
    display:flex;
    justify-content:center;
    gap:10px;
    margin:40px auto;
    max-width:700px;
}

.search-box input{
    flex:1;
    padding:15px;
    border:1px solid #ddd;
    border-radius:8px;
    font-size:16px;
}

.search-box button{
    padding:15px 30px;
    background:#d60000;
    color:#fff;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
}

.search-box button:hover{
    background:#b50000;
}

@media(max-width:768px){
.search-box{
flex-direction:column;
}
}
