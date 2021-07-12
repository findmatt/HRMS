import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';

import Divider from '../../Shared/Divider/Divider';

const MemberDetailsSection = ({ title, data, displaySeqMap }) => {
    const [section, setSection] = useState('');
    const memberDataFormatter = async () => {
        const result = await Promise.all(
            displaySeqMap.map(async (map) => {
                let value = data[map.key];
                if (!data[map.key] || map.value === '') {
                    return '';
                }
                if (map.formatter) {
                    const formatters = await import('../../../lib/Formatters');
                    if (
                        formatters[map.formatter] &&
                        typeof formatters[map.formatter] === 'function'
                    ) {
                        value = formatters[map.formatter](data[map.key]);
                    }
                }

                const { label } = map;
                const separator = label === '' ? '' : ':';

                return (
                    <tr key={uuid()}>
                        <td className="text-neutral pr-1">{label}</td>
                        <td className="text-neutral pr-1">{separator}</td>
                        <td className="break-all">{value}</td>
                    </tr>
                );
            })
        );
        return result;
    };
    useEffect(async () => {
        const component = await memberDataFormatter(data, displaySeqMap);
        setSection(component);
    }, [data]);
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

MemberDetailsSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object]).isRequired,
    displaySeqMap: PropTypes.arrayOf(PropTypes.object),
};
export default MemberDetailsSection;
