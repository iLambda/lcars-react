import { ReactNode, memo } from 'react';
import * as stylesheet from './pill.css';

type PillProps = {
    children?: ReactNode;    
}

export const Pill = memo((props: PillProps) => {
    /* Return the component */
    return (
        <button type='button' className={stylesheet.classes.button}>
            <div className={stylesheet.classes.wrapper}>
                
            </div>
        </button>
    );
});