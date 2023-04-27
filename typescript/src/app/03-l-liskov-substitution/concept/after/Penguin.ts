import Bird from './Bird';

export default class Penguin implements Bird {
  fly(): string {
    return 'I cannot fly.';
  }
}