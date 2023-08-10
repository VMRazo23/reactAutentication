import React, {useState} from 'react';
import {auth} from '../firebaseconfig';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

function Login(){
    const historial = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msgError,setMgsError] = useState(null);

    const registrarUsuario = (e)=> {
        e.preventDefault();

            createUserWithEmailAndPassword(auth, email, password).then(e => {
                historial('/')
            })
            .catch(e => {

                if (e.code === 'auth/invalid-email') {
                    setMgsError('Email format is invalid');
                }
                if (e.code === 'auth/weak-password') {
                    setMgsError('Password should have 8 caraters');
                }
            })
        }

    const loginUsuario = (e)=> {
        signInWithEmailAndPassword(auth,email, password).then(r=> {
            historial('/');
        })
            .catch(err=>{
                if(err.code === 'auth/user-not-found'){
                    setMgsError('Email not found');
                }
                if(err.code === 'auth/wrong-password'){
                    setMgsError('Password incorrect');
                }
                if(err.code === 'auth/user-disabled'){
                    setMgsError('Usuario deshabilitado');
                }
            })
    }
    return(
        <div className={"row mt-5"}>
            <div className={"col"}></div>
            <div className={"col"}>
                <form className={"form-group"} onSubmit={registrarUsuario}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type={"email"}
                        placeholder={"Introduce tu email"}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control mt-4"
                        type={"password"}
                        placeholder={"Introduce el password"}
                    />
                    <input
                        type="submit"
                        value="Registrar usuario"
                        className="btn btn-dark btn-block mt-4 w-100"
                    />
                </form>
                <button
                    className={"btn btn-success w-100 mt-3"}
                    onClick={loginUsuario}
                >
                    Iniciar sesión
                </button>
                {
                    msgError ?
                        (
                            <div className={"alert alert-danger"}>
                                {msgError}
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className={"col"}></div>
        </div>
    )
}

export default Login;