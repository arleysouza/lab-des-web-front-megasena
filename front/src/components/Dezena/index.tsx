import { WrapperSld, DezenaSld } from "./styles";

type Props = {
    listaDezenas: string[];
}

export function Dezena({listaDezenas}:Props) {
    return (
        <WrapperSld>
            {
                listaDezenas.map( dezena => <DezenaSld key={dezena}>{dezena}</DezenaSld>)
            }
        </WrapperSld>
    );
}