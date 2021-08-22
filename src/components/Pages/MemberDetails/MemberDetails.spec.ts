import Formatters from '../../../utilities/Formatters';

export type LineTemplate<T> = {
    attributeName: keyof T;
    label: string;
    formatter: keyof typeof Formatters | null;
};

export type SectionTemplate<T> = LineTemplate<T>[];

export type SectionData<T> = T;

export type Notes = string[];
