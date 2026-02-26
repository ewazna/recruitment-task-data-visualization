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
  const total = 123;
  const percentage = point.percentage ? point.percentage.toFixed(1) : 0;

  return `
    <div style="font-family: 'Inter', sans-serif; padding: 4px; min-width: 180px;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
        <span style="color: ${point.color.stops[0][1]}; font-size: 16px;">●</span>
        <span style="color: #cbd5e1; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Client Type:</span>
        <span style="font-weight: 700; color: white; margin-left: auto;">${point.name}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: #94a3b8; font-size: 12px;">Percentage:</span>
          <span style="font-weight: 600; color: white;">${percentage}%</span>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: #94a3b8; font-size: 12px;">Number of clients:</span>
          <span style="font-weight: 600; color: white;">${point.y}</span>
        </div>
      </div>

      <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dotted rgba(255,255,255,0.2); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 500; color: #cbd5e1; font-size: 12px;">Total number of clients:</span>
        <span style="font-weight: 700; color: #65e2b0;">${total}</span>
      </div>
    </div>`;
};
