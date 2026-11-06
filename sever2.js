import express from 'express';

const app = express();
const PORT = 4000;

// 1. [GET] /api/health -> ตรวจสอบการทำงานของเซิร์ฟเวอร์
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'พร้อมทำงานแล้วค้าบสุดหล่อ'
  });
});

// 2. [GET] /api/formula1 -> คำนวณสูตรคณิตศาสตร์ 1 (พื้นที่สามเหลี่ยม = 1/2 * ฐาน * สูง)
// รับค่าพารามิเตอร์แบบ query string เช่น /api/formula1?base=10&height=5
app.get('/api/formula1', (req, res) => {
  const { base, height } = req.query;

  // ตรวจสอบว่าส่งค่ามาครบ 2 ตัวหรือไม่
  if (!base || !height) {
    return res.status(400).json({
      error: 'กรุณาส่งพารามิเตอร์ query ให้ครบ 2 ตัว: base และ height'
    });
  }

  const b = parseFloat(base);
  const h = parseFloat(height);

  if (isNaN(b) || isNaN(h)) {
    return res.status(400).json({ error: 'ตัวแปรต้องเป็นตัวเลขเท่านั้น' });
  }

  // สูตร: 1/2 * ฐาน * สูง
  const result = 0.5 * b * h;

  res.json({
    formula: '1/2 * base * height',
    base: b,
    height: h,
    result: result
  });
});

// 3. [GET] /api/formula2 -> คำนวณสูตรคณิตศาสตร์ 2 (เศษส่วน = a / b)
// รับค่าพารามิเตอร์แบบ path (route params) เช่น /api/formula2/10/2
app.get('/api/formula2/:a/:b', (req, res) => {
  const { a, b } = req.params;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'ตัวแปรต้องเป็นตัวเลขเท่านั้น' });
  }

  if (numB === 0) {
    return res.status(400).json({ error: 'ตัวหาร (b) ต้องไม่เป็น 0' });
  }

  // สูตร: a / b
  const result = numA / numB;

  res.json({
    formula: 'a / b',
    a: numA,
    b: numB,
    result: result
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});