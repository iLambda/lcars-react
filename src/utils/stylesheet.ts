import { StyleRule, createVar } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/* Pull some types from vanilla extract */
export type CSSVariable = ReturnType<typeof createVar>;

/* Some useful styles */
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

/* Assign variables */
export const assign = <const Vars extends string>(_: { vars: Record<Vars, CSSVariable> }, values: Record<Vars, string>) =>
    assignInlineVars(values);