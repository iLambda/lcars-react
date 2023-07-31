import { StyleRule } from '@vanilla-extract/css';

export const styles = {
    /* Unstyle a button */
    unstyledButton: {
        border: 0,
        padding: 0,
        appearance: 'none',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
        overflow: 'visible',
        textTransform: 'none',
        WebkitAppearance: 'button',
    }
} satisfies Record<string, StyleRule>;