export class Cuidado {
  parentCode: number;
  caretakerCode: number;
  beginning: Date;
  duration: number;
  description: string;

  constructor(parentCode: number,
    caretakerCode: number,
    beginning: Date,
    duration: number,
    description: string) {
      this.beginning = beginning;
      this.caretakerCode = caretakerCode;
      this.description = description;
      this.duration = duration;
      this.parentCode = parentCode;

    }
}
