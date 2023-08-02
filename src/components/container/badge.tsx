import { assign } from '../../utils/stylesheet';
import * as stylesheet from './badge.css';

import { ReactNode, memo } from 'react';

type BadgeProps = {
    width?: string;
    height?: string;
    color: string;
    data: string | number;
    children?: ReactNode;
}

/**
 * @group Components
 */
export const Badge = memo((props: BadgeProps) => {
    /* Set the varaiables */
    const style = assign(stylesheet, {
        width: props.width ?? 'auto',
        height: props.height ?? 'fit-content',
        backgroundColor: props.color,
        color: '#f5f6fa'
    });
    /* Return the component */
    return (
        <div data-key={props.data} className={stylesheet.classes.badge} style={style}>
            <div className={stylesheet.classes.content}>
                {props.children}
            </div>
        </div>
    );
});