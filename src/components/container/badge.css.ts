import { lcarsgtj3 } from '@lib/styles/fonts.css';
import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const vars = {
    width: createVar(),
    height: createVar(),
    color: createVar(),
    backgroundColor: createVar()
};

export const classes = {
    /* The badge itself */
    badge: style({
        backgroundColor: vars.backgroundColor,
        color: vars.color,
        width: vars.width,
        height: vars.height,
        display: 'inline-grid',
        gridTemplateRows: '[head] max-content [tail]',
        gridTemplateColumns: '[head] max-content [bar] max-content [from] minmax(min-content,max-content) [tail]',
        borderTopLeftRadius: '1rem 2rem',
        borderTopRightRadius: '1rem 2rem',
        borderBottomLeftRadius: '1rem 2rem',
        borderBottomRightRadius: '1rem 2rem',
        padding: '0 1rem',
        /* Before pseudoelement */
        '::before': {
            content: 'attr(data-key)',
            gridArea: 'head/head/tail/bar',
            fontSize: '300%',
            fontWeight: 'bold',
            fontFamily: lcarsgtj3,
            lineHeight: 1,
            height: 'fit-content',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            paddingRight: calc.subtract('1rem', '4px'),
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem'
        },
        /* After pseudoelement */
        '::after':  {
            content: '',
            gridArea: 'head/bar/tail/from',
            borderRight: `.1rem solid ${vars.color}`,
            borderLeft: `.2rem solid ${vars.color}`,
            display: 'block',
            width: '.4rem',
            marginRight: '1rem'
        }
    }),
    /* The content inside the badge */
    content: style({
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: 'auto',
        height: 'auto'
    })
};