import * as stylesheet from './pill.css';

import { ReactNode, memo } from 'react';
import { Alignment } from '@lib/utils/types';

type PillProps = {
    children?: ReactNode;
    align?: Alignment;
    
    /* Called when control is clicked */
    onClick?: () => void;
}

/**
 * @group Components
 */
export const Pill = memo((props: PillProps) => {
    /* Return the component */
    return (
        <button type='button' className={stylesheet.classes.button}>
            <div className={stylesheet.classes.wrapper}>
                
            </div>
        </button>
    );
});