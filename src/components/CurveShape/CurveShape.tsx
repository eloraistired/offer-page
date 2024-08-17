import * as React from 'react';
const CurveShape = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1938 313" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.677029 0.816528C189.937 207.138 322.717 306.139 399.037 297.821C513.507 285.343 565.207 246.146 641.407 215.778C717.617 185.411 820.657 131.728 1039.4 182.882C1258.14 234.037 1515.23 128.741 1543.08 112.216C1570.94 95.6907 1664.59 41.2957 1776.87 47.4587C1851.72 51.5677 1905.43 38.1747 1938 7.27971V313L0.677002 313"
      fill="currentColor"
    />
  </svg>
));

CurveShape.displayName = 'CurveShape';

export { CurveShape };
