import { Item, GildedRose, SULFURUS, BRIE } from './gilded-rose';

test('should create item foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe('foo');
  expect(items[0].quality).toBe(0);
  expect(items[0].sellIn).toBe(-1);
});

test('should decrease quality on normal item', () => {
  const gildedRose = new GildedRose([new Item('foo', 10, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toBe(9);
});

const sellInTestCases = [10, 5, 1, 0, -1];
sellInTestCases.forEach((sellIn) =>
  test(`should decrease sellin from ${sellIn} on normal item`, () => {
    const gildedRose = new GildedRose([new Item('foo', sellIn, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(sellIn - 1);
  })
);

test('should decrease quality more on expired item', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toBe(8);
});

test('should create item Sulfuras, Hand of Ragnaros', () => {
  const gildedRose = new GildedRose([new Item(SULFURUS, 0, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toBe(10);
  expect(items[0].sellIn).toBe(0);
});
test('should create item Brie', () => {
  let prevQuanlity = 0;
  const gildedRose = new GildedRose([new Item(BRIE, 5, prevQuanlity)]);
  const items = gildedRose.updateQuality();
  console.log(items);
  expect(items[0].quality).toBe(1);
});
test('should create item Brie when sellin is 0 goes up by 2', () => {
  let prevQuanlity = 0;
  const gildedRose = new GildedRose([new Item(BRIE, 0, prevQuanlity)]);
  const items = gildedRose.updateQuality();
  console.log(items);
  expect(items[0].quality).toBe(2);
});
