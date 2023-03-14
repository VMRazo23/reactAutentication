import React,{useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from "../firebaseconfig";

function Menu(){
const historial = useNavigate();
const [usuario,setUsuario] = useState(null);
useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
        if(user){
            setUsuario(user.email);
        }
    })
},[])

const cerrarSession = ()=>{
 auth.signOut();
 setUsuario(null)
 historial('/')
}
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between px-2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li>
                        {
                            !usuario ?
                                (<Link to="/login" className="nav-link">Login</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </li >
                    <li>
                        {
                            !usuario ?
                                (<Link to="/admin" className="nav-link">Admin</Link>

                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </li>
                </ul>
                {
                    usuario ?
                    (<button
                        onClick={cerrarSession}
                        className={"btn btn-danger"}
                    >Cerrar sesión
                    </button>)
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>

    )}

export default Menu;