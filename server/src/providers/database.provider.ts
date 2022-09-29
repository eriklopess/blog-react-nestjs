import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_SOURCE',
    useFactory: async () => {
      const source = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'dev',
        password: '123',
        database: 'blog',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return source.initialize();
    },
  },
];
