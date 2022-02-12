import { createGlobalStyle } from "styled-components";
import IconMoonEot from '../assets/fonts/icomoon.eot';
import IconMoonttf from '../assets/fonts/icomoon.ttf';
import IconMoonWoff from '../assets/fonts/icomoon.woff'; 

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fffffe; 
        --black: #16161a; 
        --primary: #7f5af0; 
        --secondary: #a786df; 
        --tertiary: #72757e; 
        --green: #2cb67d; 
        --grey: #94a1b2; 
        --purple: #6b47dc; 
        --neutral: #232e35; 
        --red: #ef4565; 
        --disabled: #D4CAF3;
        --success-alert: #ACFFCF;
        --fail-alert: #F9CFD7;
        --fail-text: #B81E3B;
        --subtitle2: 600 0.75rem/normal Nunito; 
        --headline-headline1: extrabold 1.5rem/normal Nunito; 
        --headline-headline2: 700 1.375rem/normal Nunito; 
        --subtitle-subtitle1: 600 1.125rem/normal Nunito; 
        --body1-regular: 400 1rem/1.5rem Nunito; 
        --body1-bold: 700 1rem/1.5rem Nunito; 
        --body2-regular: 400 0.875rem/normal Nunito; 
        --body2-bold: 700 0.875rem/normal Nunito; 
        --button-button: 500 0.875rem/1rem Rubik; 
        --caption-caption: 400 0.6875rem/normal Nunito; 
    }

    body {
        font-size: 16px;  
        background-color: var(--primary);
        margin:0;
        padding:0;
    }
 


    @font-face {
        font-family: 'icomoon';
        src: url('${IconMoonEot}');
        src: url('${IconMoonEot}') format('embedded-opentype'),
             url('${IconMoonttf}') format('truetype'),
             url('${IconMoonWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
`