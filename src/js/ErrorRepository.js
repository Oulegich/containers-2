export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  translate(code, description) {
    if (!this.errorMap.has(code)) {
      this.errorMap.set(code, description);
    }
    return this.errorMap.get(code) || 'Unknown error';
  }
}