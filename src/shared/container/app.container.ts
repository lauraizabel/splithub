import { Container } from 'inversify';
import { userContainer } from '@/modules/users/di/user.container';
import { expenseContainer } from '@/modules/expenses/di/expense.container';
import { sharedContainer } from '@/shared/di/shared.container';
import { authContainer } from '@/modules/auth/di/auth.container';

export const appContainer = new Container();

appContainer.load(userContainer);
appContainer.load(expenseContainer);
appContainer.load(authContainer);
appContainer.load(sharedContainer);

export default appContainer;
