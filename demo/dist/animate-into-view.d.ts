interface AnimateIntoViewSettings {
    selector: string;
    threshold?: number;
    type?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | string;
}
export declare function animateIntoView(settings: AnimateIntoViewSettings): void;
export declare function animateIntoViewV2(settings: AnimateIntoViewSettings): void;
export {};
