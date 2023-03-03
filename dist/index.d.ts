interface AnimateIntoViewSettings {
    selector: string;
    threshold: number;
    type: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight';
}
export declare function animateIntoView(settings: AnimateIntoViewSettings): void;
export {};
