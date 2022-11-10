import { useEffect, useState } from "react";
import { Cabecalho } from "../components/Cabecalho";
import { Acumulou } from "../components/Acumulou";
import services from "../services";
import { Props } from "../types";
import { Dezena } from "../components/Dezena";
import { Carregando } from "../components/Carregando";

export default function Principal() {
    const [concurso, setConcurso] = useState({} as Props);
    useEffect(
        function () {
            (
                async function () {
                    const numero = Math.floor(Math.random() * 2533);
                    const temp: Props = await services.get(numero);
                    setConcurso(temp);
                    console.log(temp)
                }
            )()
        },
        []
    );

    return (
        <>
            {
                concurso.numero ? 
                <>
                    <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
                    {
                        concurso.acumulado && <Acumulou />
                    }
                    <Dezena listaDezenas={concurso.listaDezenas} />
                </>
                : <Carregando />
            }
        </>
    );
}
