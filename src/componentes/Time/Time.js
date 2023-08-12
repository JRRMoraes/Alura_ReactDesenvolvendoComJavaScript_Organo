import Colaborador from "../Colaborador"
import "./Time.css"

export const Time = (props) => {

    const cssPrimaria = { borderColor: props.corPrimaria }


    const cssSecundaria = { backgroundColor: props.corSecundaria }


    return (
        (props.colaboradores.length > 0) &&

        <section className="time" style={cssSecundaria}>
            <h3 style={cssPrimaria}>{props.nome}</h3>
            {props.colaboradores.map(colaborador =>
                <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={props.corPrimaria} ></Colaborador>
            )}
        </section>
    )
}