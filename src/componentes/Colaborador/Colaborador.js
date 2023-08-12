import "./Colaborador.css"

export const Colaborador = ({ nome, cargo, imagem, corPrimaria }) => {

    const cssPrimaria = { backgroundColor: corPrimaria }

    return (
        <div className="colaborador">
            <div className="cabecalho" style={cssPrimaria}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}