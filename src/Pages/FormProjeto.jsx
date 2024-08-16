import * as C from "@chakra-ui/react"
import { Checkbox } from '@chakra-ui/react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <C.Heading as="h1" size="sm">Cadastro de Projeto</C.Heading>
            <C.Input type="text" placeholder="Insira o nome do projeto"/>
            <C.Input type="text" placeholder="Insira a área de atuação do projeto"/>
            <C.Input type="text" placeholder="Insira o Coordenador/Professor"/>
            <h1>Selecione a sua escola</h1>
            <Checkbox>CETCC</Checkbox>
            <Checkbox>CETAFEST</Checkbox>
            <Checkbox>CETICC</Checkbox>
            <Checkbox>CETAFAJU</Checkbox>
        </C.VStack>
    )
}



export default FormProjeto