import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormPessoal = () => {
  const [genero, setGen] = useState('');

  return (
    <C.VStack spacing={5}>
      <C.Heading as="h1" size="sm">Cadastro</C.Heading>
      <C.Input type="email" placeholder="Insira seu E-mail"/>
      <C.Input type="text" placeholder="Insira seu Nome"/>
      <C.Input type="text" placeholder="Insira seu CPF"/>
      <C.Input type="text" placeholder="Insira seu Telefone"/>
      <C.RadioGroup onChange={(value) => setGen(value)} value={genero}>
        <C.Radio value="masculino">Masculino</C.Radio>
        <C.Radio value="feminino">Feminino</C.Radio>
      </C.RadioGroup>
    </C.VStack>
  );
};

export default FormPessoal;