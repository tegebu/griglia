import { RangeElement } from '../RangeElement';

export class NoNumber implements RangeElement {
  private static readonly INSTANCE: NoNumber = new NoNumber();

  public static of(): NoNumber {
    return NoNumber.INSTANCE;
  }

  protected constructor() {
    // NOOP
  }

  public contains(): boolean {
    return false;
  }

  public ready(): boolean {
    return false;
  }

  public add(num: number): RangeElement {
    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
  }

  public remove(num: number): RangeElement {
    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
  }

  public serialize(): string {
    return '';
  }

  public equals(other: RangeElement): boolean {
    return this === other;
  }
}
