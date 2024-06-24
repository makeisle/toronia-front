import "styled-components";


declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        textColor: string;
        btnColor: string;
        positive: string;
        negative: string;
        fontFamily: string;
    }
}
