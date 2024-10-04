import React from 'react';
import type ReadonlyUnitMap from '../ReadonlyUnitMap.js';
import type UnitMap from '../UnitMap.js';
import type { Decimal } from 'decimal.js';

export type ItemTableParams = {
    values: ReadonlyUnitMap | UnitMap;
};

const getClassName = (
    value: Decimal,
): string => {
    if (value.gt(0)) {
        return 'positive';
    } else if (value.lt(0)) {
        return 'negative';
    } else {
        return 'neutral';
    }
};

const renderRows = (
    values: ReadonlyUnitMap | UnitMap,
) => values.map(item => <tr>
    <td className={getClassName(item.value)}>{item.unit}</td>
    <td className={getClassName(item.value)}>{item.value.toString()}</td>
</tr>);

export default ({ values }: ItemTableParams) => <table>
    <thead>
        <tr>
            <th>Item</th>
            <th>Rate</th>
        </tr>
    </thead>
    <tbody>
        {...renderRows(values)}
    </tbody>
</table>;
