import { ConcursoSld, ResultadoSld, WrapperSld } from "./styles";

type Props = {
    numero: number;
    dataApuracao: string;
}

export function Cabecalho({numero, dataApuracao}:Props) {
    return (
        <WrapperSld>
            <ResultadoSld>Resultado</ResultadoSld>
            <ConcursoSld>Concurso {numero} ({dataApuracao})</ConcursoSld>
        </WrapperSld>
    );
}