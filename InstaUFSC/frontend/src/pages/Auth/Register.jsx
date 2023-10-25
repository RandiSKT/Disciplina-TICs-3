import "./Auth.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUser({
      //spread operator, mantém a estrutura inicial e adiciona nova informação ...user,
      //tanto o valor quanto o nome do campo são dinâmicos
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div id="register">
      <h2>InstaUFSC</h2>
      <p className="subtitle">
        Cadastre-se para ver as fotos dos seus contatos.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
        />
        <input type="submit" value="Cadastrar" />
        <p>
          Já possui cadastro? <NavLink to="/login">Clique aqui</NavLink>
        </p>
      </form>
    </div>
  );
};
export default Register;
