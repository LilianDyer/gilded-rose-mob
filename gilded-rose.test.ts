import { Item, GildedRose, BRIE, SULFURAS, PASSES } from './gilded-rose';

describe('Normal Item', () => {
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

    test('should decrease quality more on expired item', () => {
        const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
        const items = gildedRose.updateQuality();
        const [first] = items;
        expect(first.quality).toBe(8);
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
});

describe('Brie Item', () => {
    test('should increases by 1 when sellIn is greater than 0', () => {
        let prevQuality = 0;
        const gildedRose = new GildedRose([new Item(BRIE, 5, prevQuality)]);
        const items = gildedRose.updateQuality();
        const [first] = items;
        expect(first.quality).toBe(1);
    });
    test('should increase by 2 when sellIn is 0', () => {
        let prevQuality = 0;
        const gildedRose = new GildedRose([new Item(BRIE, 0, prevQuality)]);
        const items = gildedRose.updateQuality();
        const [first] = items;
        expect(first.quality).toBe(2);
    });
});

describe('Sulfuras, Hand of Ragnaros', () => {
    test('should create item Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([new Item(SULFURAS, 0, 10)]);
        const items = gildedRose.updateQuality();
        const [first] = items;
        expect(first.quality).toBe(10);
        expect(first.sellIn).toBe(0);
    });
});

describe('Backstage Passes', () => {
  test('should increase by 2 when sellIn is 10 days to 6 days', () => {
      const gildedRose = new GildedRose([new Item(PASSES, 10, 10)]);
      const items = gildedRose.updateQuality();
      const [first] = items;
      expect(first.quality).toBe(12);
      expect(first.sellIn).toBe(9);
  });

  test('should increase by 2 when sellIn is 10 days to 6 days', () => {
    let sellIn = 10;
    let quality = 10;
    let gildedRose = new GildedRose([new Item(PASSES, sellIn, quality)]);
    while (sellIn > 5) {
      let items = gildedRose.updateQuality();
      let [first] = items;
      expect(first.quality).toBe(quality + 2);
      expect(first.sellIn).toBe(sellIn - 1);
      sellIn--;
      quality += 2;
    }
    
  });
  
});
