import * as fonts from '@fix/fonts';
import { fontFace } from '@vanilla-extract/css';

/* A helper to link the fonts */
const extFont = ['woff2', 'woff', 'ttf', 'eot'] as const;
const urlFont = (url: string, ext: string) => `url(${url}) format('${ext}')`;
const srcFont = (ext: string, font: Record<string, string>) => ext in font ? urlFont(font[ext]!, ext) : undefined; 
const linkFont = (font: Record<string, string>) => extFont.flatMap(ext => srcFont(ext, font) ?? []);

export const antonio = fontFace([
    {
        fontWeight: 400,
        src: linkFont(fonts.antonio.regular)
    },
    {
        fontWeight: 700,
        src: linkFont(fonts.antonio.bold)
    }
]);

export const lcarsgtj2 = fontFace({
    src: linkFont(fonts.lcarsgtj2.regular)
});

export const lcarsgtj3 = fontFace({
    src: linkFont(fonts.lcarsgtj3.regular)
});

