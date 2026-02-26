export const tooltipFormatter = function (this: any) {
  const total = this.points.reduce(
    (total: number, point: any) => total + point.y,
    0,
  );
  const chartOptions = this.series.chart.options;
  const { title, visibleCurrency } = chartOptions.chart.custom;

  let tooltipHtml = `
        <div style="font-size: 14px; margin-bottom: 8px;">${title} made in 
            <span style="font-weight: bold;">${this.category}</span>
        </div>`;

  this.points.forEach((point: any) => {
    tooltipHtml += `
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color:${point.color}; font-size: 18px; line-height: 0;">●</span>
              <span style="color: #cbd5e1;">${point.series.name}:</span>
            </div>
            <span style="font-weight: bold;">${point.y} ${visibleCurrency}</span>
          </div>`;
  });

  tooltipHtml += `
        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;">
          <span style="font-weight: bold;">Total:</span>
          <span style="font-weight: bold; margin-left: 4px;">${total} ${visibleCurrency}</span>
        </div>`;

  return tooltipHtml;
};
