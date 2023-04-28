import { sum, Item, GildedRose } from './gilded-rose';

test('should create item foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe('foo');
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('basic async', async () => {
  expect(sum()).toBe(0);
});

test('basic again async', async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000 /* optional timeout */);
