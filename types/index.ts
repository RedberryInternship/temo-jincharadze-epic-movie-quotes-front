import Pusher from 'pusher';

export * from './modal';
export * from './user';
export * from './movie';

declare global {
  interface Window {
    pusher: typeof Pusher;
  }
}
