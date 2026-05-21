import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumarryCard, SumarryContainer } from "./styles";
import { priceFormatter } from "../../../ultils/formatter";
import { useSummary } from "../../../hooks/useSummary";

export function Sumarry() {
 const summary = useSummary();

  return (
    <SumarryContainer>
      <SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SumarryCard>

      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SumarryCard>
    </SumarryContainer>
  );
}
