import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button } from 'primereact/button';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Logo from '../../assets/tambank.svg';

import '../../styles/pages/Login/style.css';

interface IFormLogin {
    email: string;
    password: string
}

export const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
      })
      
        const { register, handleSubmit, formState:{ errors } } = useForm<IFormLogin>({
          resolver: yupResolver(schema)
        });

        const onSubmit = (data: IFormLogin) => {
            const { email, password } = data;
            setLoading(true)

            setTimeout(() => {
                if (email === "teste@gmail.com" && password === "123456") {
                    localStorage.setItem("authToken", "12345")
                    setLoading(false)
                    navigate('/')
                }
            }, 4000)  
        }

    return (
        <div className="container-login animate__animated animate__fadeIn animate__faster">
            <div className="container-btn-question">
                <div>
                    <button className="btn-question" ><i className="pi pi-question"/></button>
                </div>
            </div>

            <div className="container-logo">
                <img src={Logo}/>
            </div>

            <form className="container-form-login">
                <div className="container-input-login">
                    <label htmlFor="a">E-mail</label>
                    <input placeholder="Digite o seu e-mail" className="input-login" {...register("email")}/>
                </div>

                <div className="container-input-login">
                    <label htmlFor="a">Senha</label>
                    <input placeholder="Digite sua senha" className="input-login" type="password" {...register("password")}/>
                </div>

                <div className="forgot-password">
                    <Link to="a">Esqueceu sua senha?</Link>
                </div>

                <div>
                    <Button className="btn-login" disabled={false} onClick={handleSubmit(onSubmit)} label="Entrar" style={{background: "#fff"}} loading={loading}/>
                </div>

                <div className="no-have-account">
                    <span>Ainda não possui uma conta?</span>
                    <Link to='d'>Criar conta</Link>
                </div>
            </form>
        </div>
    )
}
