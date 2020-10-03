import { ANumeralSystem } from './ANumeralSystem';
import { DecimalPoint } from './Value/DecimalPoint';
import { DigitDelimiter } from './Value/DigitDelimiter';
import { DecimalPart } from './Value/Part/DecimalPart';
import { IntegerPart } from './Value/Part/IntegerPart';
import { Value } from './Value/Value';

const NUMBER_EXPRESSION: RegExp = /^(\d+),?(\d*)$/u;

export class EuropoanNumeralSystem extends ANumeralSystem {
  public static of(value: Value): EuropoanNumeralSystem {
    return new EuropoanNumeralSystem(value);
  }

  public static ofNumber(value: number): EuropoanNumeralSystem {
    return EuropoanNumeralSystem.ofString(`${value}`);
  }

  public static ofString(value: string): EuropoanNumeralSystem {
    const array: RegExpExecArray | null = NUMBER_EXPRESSION.exec(value);

    if (array === null) {
      throw new Error(`THIS STRING IS NOT AMERICAN STYLE: ${value}`);
    }

    return EuropoanNumeralSystem.of(
      Value.of(
        IntegerPart.of(array[1]),
        DecimalPart.of(array[2]),
        DecimalPoint.COMMA,
        DigitDelimiter.DOT
      )
    );
  }

  protected constructor(value: Value) {
    super(value);
  }

  public stringify(): string {
    return `${this.integerpart()}${this.value.getPoint().getPoint()}${this.value.getDecimal().getValue()}`;
  }

  private integerpart(): string {
    const integer: string = this.value.getInteger().toString();
    const reversed: Array<string> = integer.split('').reverse();

    return this.delimiterize(reversed).reverse().join('');
  }

  private delimiterize(reversedInteger: Array<string>): Array<string> {
    if (reversedInteger.length === 0) {
      return [];
    }

    const [o, t, h, ...rest] = reversedInteger;
    const concat: string = `${this.oneletter(o)}${this.oneletter(t)}${this.oneletter(h)}`;

    if (concat.length !== 3) {
      return [concat];
    }

    return [concat, this.value.getDelimiter().getPoint(), ...this.delimiterize(rest)];
  }

  private oneletter(str?: string): string {
    if (typeof str === 'undefined') {
      return '';
    }

    return str;
  }
}
