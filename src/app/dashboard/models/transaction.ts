export class Transaction {
  constructor(public from: string,
              public target: string,
              public amount: number,
              public total: number,
              public date: Date) {
  }

  public static fromDto(data: any): Transaction {
    return new Transaction(data.from, data.target, data.amount, data.total, new Date(data.date));
  }

  toDto(): any {
    return {
      target: this.target,
      amount: this.amount
    };
  }
}
