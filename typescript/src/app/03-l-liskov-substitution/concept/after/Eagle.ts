import Bird from './Bird';

export default class Eagle implements Bird {
  fly(): string {
    return 'I can fly.';
  }
}