import {Layout} from "../components/Layout";
import bitImg from "../assets/Bitcoin-Emblema.png";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    return (
        <Layout>
            <form className="login-form">

                <span className="login-form-title">Criar Conta!</span>

                <div className="wrap-input">
                    <input
                        className={name !== "" ? 'has-val input' : 'input'}
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Name"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="CPF"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta?</span>

                    <Link className="text2" to="/">Entrar com Email.</Link>
                </div>
            </form>
        </Layout>
    )
}