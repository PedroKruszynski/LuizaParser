import { container } from 'tsyringe';

import ILogProvider from './LogProvider/models/ILogProvider';
import LogProvider from './LogProvider/implementations/LogProvider';

container.registerSingleton<ILogProvider>('LogProvider', LogProvider);
