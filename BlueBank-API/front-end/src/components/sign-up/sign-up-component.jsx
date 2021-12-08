import React, { useState } from "react";
import SignUpInput from "../sign-up-input/sign-up-input-component";
import "./sign-up-style.scss";
import axios from "axios";

import Profile from "../../assets/perfil.png";
import Email from "../../assets/Email.png";
import Senha from "../../assets/senha.png";
import Celular from "../../assets/celular.png";
import CPF from "../../assets/cpf.png";
import Button from "../button/button-component";
import createClient from "../../services/urls";


const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
    celular: "",
    cpf: "",
  });

  const {nome, email, password, confirmPassword, celular, cpf } = userCredentials;

  function handleSubmit(event) {
    event.preventDefault();
    createClient(nome, password);
  }

  const handleChange =(event) => {
      const {name,value} = event.target;
      setUserCredentials({...userCredentials, [name]: value});
      
    };

                
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-register">
        <div className="lado-esquerdo">
                
          <SignUpInput
            onChange={handleChange}
            titulo="Nome:"
            icone={Profile}
            name="nome"
            value={nome}
          ></SignUpInput>
          <SignUpInput
            onChange={handleChange}
            titulo="Email:"
            icone={Email}
            name="email"
            value={email}
          ></SignUpInput>
          <SignUpInput
            onChange={handleChange}
            titulo="Senha:"
            icone={Senha}
            name="password"
            tipo="password"
            value={password}
          ></SignUpInput>
        </div>

        <div className="lado-direito">
          <SignUpInput
            onChange={handleChange}
            titulo="Celular:"
            icone={Celular}
            name="celular"
            value={celular}
          ></SignUpInput>
          <SignUpInput
            onChange={handleChange}
            titulo="CPF:"
            icone={CPF}
            value={cpf}
            name="cpf"
          ></SignUpInput>
          <SignUpInput
            onChange={handleChange}
            titulo="Confirmar senha:"
            icone={Senha}
            tipo="password"
            name="confirmPassword"
            value={confirmPassword}
          ></SignUpInput>
        </div>
      </div>
      <div className="botao">
        <Button
          type="submit"
          tipo="submit"
          texto="CRIAR CONTA"
          tamanho="560px"
        />
      </div>
    </form>
  );
};

export default SignUp;
