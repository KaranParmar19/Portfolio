declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | Element, config?: {
      type?: string;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
    });
    revert(): void;
    split(config?: object): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(config?: {
      smooth?: number;
      effects?: boolean;
      smoothTouch?: number;
      normalizeScroll?: boolean;
      ignoreMobileResize?: boolean;
      wrapper?: string | Element;
      content?: string | Element;
    }): ScrollSmoother;
    scrollTo(target: string | Element | number, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
