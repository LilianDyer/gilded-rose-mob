import { Item, GildedRose, BRIE, SULFURAS } from './gilded-rose';

test('should create item foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.name).toBe('foo');
  expect(first.quality).toBe(0);
  expect(first.sellIn).toBe(-1);
});

test('should decrease quality on normal item', () => {
  const gildedRose = new GildedRose([new Item('foo', 10, 10)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.quality).toBe(9);
});

const sellInTestCases = [10, 5, 1, 0, -1];
sellInTestCases.forEach((sellIn) =>
  test(`should decrease sellIn from ${sellIn} on normal item`, () => {
    const gildedRose = new GildedRose([new Item('foo', sellIn, 10)]);
    const items = gildedRose.updateQuality();
    const [first] = items;
    expect(first.sellIn).toBe(sellIn - 1);
  })
);

test('should decrease quality more on expired item', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.quality).toBe(8);
});

test('should create item Sulfuras, Hand of Ragnaros', () => {
  const gildedRose = new GildedRose([new Item(SULFURAS, 0, 10)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.quality).toBe(10);
  expect(first.sellIn).toBe(0);
});

test('should create item Brie', () => {
  let prevQuality = 0;
  const gildedRose = new GildedRose([new Item(BRIE, 5, prevQuality)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.quality).toBe(1);
});

test('should create item Brie when sellIn is 0 goes up by 2', () => {
  let prevQuality = 0;
  const gildedRose = new GildedRose([new Item(BRIE, 0, prevQuality)]);
  const items = gildedRose.updateQuality();
  const [first] = items;
  expect(first.quality).toBe(2);
});
