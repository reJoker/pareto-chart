import { FieldType } from '@grafana/data';
export interface GraphData {
  x: string[];
  y: number[];
  p: number[];
  [key: string]: any;
}

interface Error {
  message: string;
}

export class PanelDataController {
  dataType: string;
  results: GraphData | null;
  error: Error | null;

  constructor(data: any) {
    const [target] = data.request.targets;
    const { resultFormat } = target;
    const [serie] = data.series;
    const { fields, meta } = serie;
    this.error = null;

    if (!!meta && !!meta.executedQueryString && resultFormat !== 'time_series') {
      this.dataType = 'table';
      this.results = this.setTableData(fields);
    } else if (resultFormat === 'time_series') {
      this.dataType = 'series';
      this.results = this.setTimeSeriesData(data.series);
    } else {
      this.dataType = 'series';
      this.results = this.setSeriesData(fields);
    }
  }

  getResults() {
    return {
      results: this.results,
      error: this.error,
    };
  }

  private setTableData(fields: any) {
    const xData = fields.find(({ type }: { type: string }) => type === FieldType.string);
    const yData = fields.find(({ type }: { type: string }) => type === FieldType.number);
    const xValues: string[] = xData.values.toArray().map((d: any) => `${d}`);
    const yValues: number[] = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private setSeriesData(fields: any) {
    const [xData, yData] = fields;
    const xValues: string[] = xData.values.toArray().map((d: any) => d);
    const yValues: number[] = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private setTimeSeriesData(series: any) {
    const xValues: string[] = series.map(({ name }: { name: string }) => this.stripName(name));
    const yValues: number[] = series.map(({ fields }: { fields: any }) => {
      const [, val]: [any, any] = fields;
      const [response]: [number] = val.values.toArray();
      return response;
    });
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private sumYVals(vals: number[]) {
    return vals.reduce((a, d) => a + d, 0);
  }

  private stripName(name: string) {
    const string = name.match(/\{.*:+(.*)\}/);

    if (!string) {
      return name;
    }

    const [fullTagName, tagName] = string;

    if (!!tagName) {
      return tagName.trim();
    } else if (!!fullTagName) {
      return fullTagName.trim();
    }

    return name;
  }

  private setResults(xValues: string[], yValues: number[], yValuesSum: number) {
    if (!!yValues.filter((y: number) => y < 0).length) {
      this.results = null;
      this.error = {
        message: 'Column "counts" contains negative values',
      };
      return this.results;
    }

    this.results = yValues
      .map((d, i) => ({ i, x: xValues[i], y: d }))
      .sort((a, b) => b.y - a.y)
      .reduce(
        (result: GraphData, d, i) => {
          let xPercentage = (d.y * 100) / yValuesSum;
          xPercentage = xPercentage > 100 ? 100 : xPercentage;
          let percentage = (result?.p[i - 1] ? result.p[i - 1] : 0) + xPercentage;
          percentage = percentage > 100 ? 100 : percentage;
          const tooltipLabel = `${xPercentage.toFixed(2)} %`;

          return {
            ...result,
            x: [...result.x, d.x],
            y: [...result.y, d.y],
            p: [...result.p, percentage],
            xP: [...result.xP, xPercentage],
            xAxisLabels: [...result.x, d.x],
            tooltipLabel: [...result.tooltipLabel, tooltipLabel],
          };
        },
        { x: [], y: [], p: [], xP: [], xAxisLabels: [], tooltipLabel: [] }
      );
    return this.results;
  }
}
