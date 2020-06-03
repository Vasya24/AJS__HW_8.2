export class ErrorRepository {
  constructor(map) {
    this.map = new Map()
    this.map.set(1, 'Syntax error').set(2, 'Reference error').set(3, 'Type error')
  }
  translate(code) {
    if (this.map.has(code) === true) {
    return this.map.get(code);
    } else if (this.map.has(code) === false) {
      return 'Unknown error'
    }
  }
}


