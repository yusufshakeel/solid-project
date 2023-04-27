import Bird from './Bird';

export default class Eagle extends Bird {
  fly(): string {
    return `I am Eagle. ${super.fly()}`;
  }
}