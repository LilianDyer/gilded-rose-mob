import { Item, GildedRose, SULFURUS } from './gilded-rose';

test('should create item foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe('foo');
});

test('should create item Sulfuras, Hand of Ragnaros', () => {
  const gildedRose = new GildedRose([new Item(SULFURUS, 0, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toBe(10);
  expect(items[0].sellIn).toBe(0);
});
