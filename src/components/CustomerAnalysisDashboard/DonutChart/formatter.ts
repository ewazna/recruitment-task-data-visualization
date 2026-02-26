export const labelFormatter = function (this: any) {
  const percentage = this.point.percentage.toFixed(0);
  const color = this.borderColor;

  return `
    <div style="text-align: center; font-family: 'Inter', sans-serif;">
      <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #ececec;">
        ${this.point.name}
      </span>
      <br/>
      <span style="font-size: 24px; font-weight: 500; color: ${color}; margin-top: 4px; display: block;">
        ${percentage}%
      </span>
    </div>
  `;
};

export const tooltipFormatter = function (this: any) {
  const point = this.point;

  const chartOptions = this.series.chart.options;
  const { numberOfCustomers } = chartOptions.chart.customVariables;
  const percentage = point.percentage ? point.percentage.toFixed(0) : 0;
  const quantity = ((percentage * numberOfCustomers) / 100).toFixed(0);

  const color = point.color?.stops ? point.color.stops[0][1] : point.color;

  return `
    <div style="font-size: 14px; margin-bottom: 8px;">
      Customer Type: 
      <span style="font-weight: bold; color: ${color}; text-transform: uppercase;">${point.name}</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 4px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="color: #cbd5e1;">Percentage:</span>
      </div>
      <span style="font-weight: bold;">${percentage}%</span>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 4px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="color: #cbd5e1;">Number of customers:</span>
      </div>
      <span style="font-weight: bold;">${quantity}</span>
    </div>

    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;">
      <span style="font-weight: bold;">Total number of customers:</span>
      <span style="font-weight: bold; margin-left: 4px;">${numberOfCustomers}</span>
    </div>
  `;
};
