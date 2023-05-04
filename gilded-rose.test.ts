import { Item, GildedRose } from './gilded-rose';

test('should create item foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe('foo');
});
