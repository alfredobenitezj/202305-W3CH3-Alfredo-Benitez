import { Task } from '../models/taskpet';

export const getMockTasks = (): Task[] => [
  new Task('Dog', 'Nela'),
  new Task('Dog', 'Turbo'),
  new Task('Cat', 'Cecina'),
];
