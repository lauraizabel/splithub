import { ContainerModule } from 'inversify';
import { EXPENSE_TYPES } from './types';

export const expenseContainer = new ContainerModule((bind) => {
  // Bindings do módulo de expenses
  // bind<IExpenseService>(EXPENSE_TYPES.ExpenseService).to(ExpenseService);
  // bind<IExpenseRepository>(EXPENSE_TYPES.ExpenseRepository).to(ExpenseRepository);
}); 