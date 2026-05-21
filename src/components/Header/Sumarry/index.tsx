import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumarryCard, SumarryContainer } from "./styles";
import { useContext } from "preact/hooks";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function Sumarry() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => { 
    if (transaction. type == 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price
    } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
    }

    return acc;
    }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  return (
    <SumarryContainer>
      <SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{summary.income}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{summary.outcome}</strong>
      </SumarryCard>

      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{summary.total}</strong>
      </SumarryCard>
    </SumarryContainer>
  );
}
