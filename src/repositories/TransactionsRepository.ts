import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const totalIncome = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, transaction) => {
        return acc + transaction.value;
      }, 0);

    const totalOutcome = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((acc, transaction) => {
        return acc + transaction.value;
      }, 0);

    const totalBalance = totalIncome - totalOutcome;

    return { income: totalIncome, outcome: totalOutcome, total: totalBalance };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
