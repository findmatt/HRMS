/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { v4 as uuid } from 'uuid';

import Formatters from '../../../../../utilities/Formatters';
import Divider from '../../../../Reusable/Divider/Divider';
import { MemberData, Address } from '../../types';
import { SectionData, SectionTemplate, LineTemplate } from '../types';

type Props<T> = {
    title: string;
    data: SectionData<T>;
    sectionTemplate: SectionTemplate<T>;
};
const MemberDetailsSection = <T extends MemberData | Address>({
    title,
    data,
    sectionTemplate,
}: Props<T>): React.ReactElement | null => {
    const section = sectionTemplate.map((lineTemplate: LineTemplate<T>) => {
        const dataVal: unknown = data[lineTemplate.attributeName];
        let outputString = dataVal as string;

        // apply formatter function if defined and exists
        if (lineTemplate.formatter) {
            if (Formatters[lineTemplate.formatter] && typeof Formatters[lineTemplate.formatter] === 'function') {
                outputString = Formatters[lineTemplate.formatter](data[lineTemplate.attributeName]);
            }
        }

        const { label } = lineTemplate;
        const separator = label === '' ? '' : ':';

        return (
            <tr key={uuid()}>
                <td className="text-neutral pr-1">{label}</td>
                <td className="text-neutral pr-1">{separator}</td>
                <td className="break-all">{outputString}</td>
            </tr>
        );
    });

    return (
        <div>
            <span className="card-title">{title}</span>
            <Divider />
            <table className="table-auto">
                <tbody>{section}</tbody>
            </table>
        </div>
    );
};

export default MemberDetailsSection;
