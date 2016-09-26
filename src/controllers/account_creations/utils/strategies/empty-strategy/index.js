export class EmptyStrategy {
  execute() {
    return new Promise((resolve,reject) => {
      throw "could not find a strategy";
    });
  }
}