import { css } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

export const getStyles = stylesFactory(() => {
  const theme = useTheme();

  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    tooltipContainer: css`
      position: fixed;
      z-index: 100;
      min-width: 20vw;
      display: flex;
      top: -100vh;
      left: -100vw;
    `,
    tooltip: css`
      position: absolute;
      bottom: 0;
      left: 0;
      border: 1px solid ${theme.colors.border2};
      padding: 4px 10px;
      max-width: 100%;
      color: white;

      strong {
        position: absolute;
        top: -1px;
        left: 100%;
        padding: 4px;
        bottom: -1px;
        min-width: 50px;
        text-align: center;
        background: inherit;
        border: 1px solid ${theme.colors.border2};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
      }
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    bar: css`
      cursor: pointer;
    `,
    line: css`
      fill: none;
      stroke: ${theme.isDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'};
      stroke-width: 2px;
    `,
    lineCutOff: css`
      fill: none;
      stroke: rgba(255, 0, 0, 0.75);
      stroke-width: 2px;
      stroke-dasharray: 5px;
    `,
    lineBottomAxis: css`
      fill: none;
      stroke: rgba(255, 255, 255, 1);
      stroke-width: 0.75px;
    `,
    paths: css`
      position: relative;
    `,
  };
});
