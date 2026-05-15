import { SumarryContainer } from "./styles";
import { ArrowCircleUp } from 'phosphor-react'

export function Sumarry() {
    return(
        <SumarryContainer>
            <div>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
            </div>
        </SumarryContainer>
    )
}