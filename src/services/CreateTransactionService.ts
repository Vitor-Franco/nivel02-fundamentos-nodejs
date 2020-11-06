import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const { total: compareBalance } = this.transactionsRepository.getBalance();

    if (compareBalance < value && type !== 'income') {
      throw Error('Your Balance is insufficient');
    }

    const appointment = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return appointment;
  }
}

export default CreateTransactionService;
