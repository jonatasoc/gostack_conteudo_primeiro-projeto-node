import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import AppointmentsRepositoryInterface from '@modules/appointments/repositories/AppointmentsRepositoryInterface';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import UsersRepositoryInterface from '@modules/users/repositories/UsersRepositoryInterface';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UserTokensInterface from '@modules/users/repositories/UserTokensInterface';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import NotificationRepositoryInterface from '@modules/notifications/repositories/NotificationRepositoryInterface';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

// registerSingleton cria a instância apenas uma vez durante todo o ciclo de vida de nossa aplicação, diferente do método register
// que cria uma nova instância sempre que é chamado.
container.registerSingleton<AppointmentsRepositoryInterface>(
  'AppointmentsRepository',
  AppointmentsRepository
);
container.registerSingleton<UsersRepositoryInterface>(
  'UsersRepository',
  UsersRepository
);
container.registerSingleton<UserTokensInterface>(
  'UserTokensRepository',
  UserTokensRepository
);
container.registerSingleton<NotificationRepositoryInterface>(
  'NotificationsRepository',
  NotificationsRepository
);
