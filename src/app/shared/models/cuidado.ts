export class Cuidado {
  parent: string;
  caretaker: string;
  beginning: Date;
  duration: string;
  description: string;

  constructor(parent: string,
    caretaker: string,
    beginning: Date,
    duration: string,
    description: string) {
      this.beginning = beginning;
      this.caretaker = caretaker;
      this.description = description;
      this.duration = duration;
      this.parent = parent;

    }
}
