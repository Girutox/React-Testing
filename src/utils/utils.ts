export function sum(a: number, b: number) {
  return a + b
}

export class User {
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}