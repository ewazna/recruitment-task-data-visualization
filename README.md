### Solution description:

I identified the number of orders and revenue (quantity \* unitPrice) within a specific timeframe as the most critical data. I categorized the data into series reflecting different product categories. Due to the similarity in data patterns, I decided to implement a toggle switch on the chart, allowing the user to switch seamlessly between the number of orders and revenue. I chose a stacked area chart, which effectively illustrates the differences between categories while displaying the cumulative value through stacking.

Next, I focused on customer analysis, as I believe this data is vital for any retail-based business. These insights can be used for marketing strategies and app development. I used a pie chart to show the breakdown of new versus returning customers. Additionally, I included smaller column charts to visualize the device usage for each customer types.

### Requirements:

- Node version 20.19.6 or newer
- npm version 10.8.2 or newer

### To run the project locally:

1. Clone repository

2. Install dependencies

```
npm install
```

3. Run server

```
npm run dev
```

4. Navigate in your browser to `http://localhost:5173/`
