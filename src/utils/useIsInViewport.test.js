import { isElementVisible } from './useIsInViewport';

describe('isElementVisible', () => {
    // define browser size as 500x500px
    global.innerWidth = 500;
    global.innerHeight = 500;

    it('should be visible', () => {
        // define a 300x300px element that is at coords 0,0 in the view
        const rect = {
            top: 0,
            height: 300,
            left: 0,
            width: 300,
        };

        expect(isElementVisible(rect)).toBe(true);
    });

    it('should not be visible because too low', () => {
        // define a 300x300px element that is at coords 0,600 in the view
        const rect = {
            top: 600,
            height: 300,
            left: 0,
            width: 300,
        };

        expect(isElementVisible(rect)).toBe(false);
    });

    it('should not be visible because too far on the right', () => {
        // define a 300x300px element that is at coords 600,0 in the view
        const rect = {
            top: 0,
            height: 300,
            left: 600,
            width: 300,
        };

        expect(isElementVisible(rect)).toBe(false);
    });
});