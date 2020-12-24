if (typeof registerPaint !== "undefined") {
  class CurvedLine {
    static get inputProperties() {
      return [
        "--curved-lineColor",
        "--curved-lineSpread",
        "--curved-lineWidth",
        "--curved-lineHeight",
      ];
    }

    paint(ctx, size, properties) {
      const lineWidth = parseInt(properties.get('--curved-lineWidth')) || 3;
      const lineHeight = parseInt(properties.get('--curved-lineHeight')) || size.height;
      const color = String(properties.get('--curved-lineColor')) || 'black';
      const spread = parseInt(properties.get('--curved-lineSpread')) || 50;
      console.log('color', color);

      const offset = (lineHeight < size.height) ? (size.height - lineHeight) / 2 : 0;
      const midPoint = lineHeight / 2;

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, midPoint + offset);
      
      let curStep = spread;
      while (curStep < size.width + spread) {
        const cp1x = curStep;
        const cp1y = (lineHeight * 1.5) + offset;
        const cp2x = curStep + spread;
        const cp2y = 0 - midPoint + offset;
        const x = curStep + spread * 2;
        const y = midPoint + offset;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        curStep = curStep + (spread * 3);
      }
      ctx.stroke();
    }
  }

  registerPaint("curved-line", CurvedLine);
}
