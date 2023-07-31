import { styles } from '@lib/utils/stylesheet';
import { createVar, style } from '@vanilla-extract/css';

export const vars = {
    /* The content alignment */
    contentJustify: createVar(),
    contentAlign: createVar(),
};

export const classes = {
    /* The button style */
    button: style([styles.unstyledButton, {

    }]),
    
    /* The wrapper for the content */
    wrapper: style({
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: vars.contentJustify,
        alignItems: vars.contentAlign  
    })
};