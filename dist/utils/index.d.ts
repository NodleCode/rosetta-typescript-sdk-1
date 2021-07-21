import { Amount, BlockIdentifier } from 'types';
export declare function AddValues(a: string, b: string): string;
export declare function SubtractValues(a: string, b: string): string;
export declare function constructPartialBlockIdentifier(blockIdentifier: BlockIdentifier): any;
export declare function Hash(input: string | number | object): any;
export declare function AmountValue(amount: Amount): number;
export declare function NegateValue(amount: string): string;