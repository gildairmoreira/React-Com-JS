import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { UsuarioContex } from "common/context/usuario";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();

  function clickFeira() {
    navigate("/feira");
  }

  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContex);

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>

      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>

      <Button variant="contained" color="primary" onClick={clickFeira}>
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
