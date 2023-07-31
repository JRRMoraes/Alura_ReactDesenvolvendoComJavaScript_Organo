import { useState } from 'react';
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

export const Formulario = (props) => {

    const [nome, setNome] = useState("")


    const [cargo, setCargo] = useState("")


    const [imagem, setImagem] = useState("")


    const [time, setTime] = useState("")


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido")
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" valor={nome} aoAlterado={valor => setNome(valor)} placeholder="Digite o seu nome" obrigatorio={true} />
                <CampoTexto label="Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} placeholder="Digite o seu cargo" obrigatorio={true} />
                <CampoTexto label="Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} placeholder="Digite o endereço da sua imagem" />
                <ListaSuspensa label="Time" valor={time} aoAlterado={valor => setTime(valor)} itens={props.times} obrigatorio={true}></ListaSuspensa>
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}