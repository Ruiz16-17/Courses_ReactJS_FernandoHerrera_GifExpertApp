import { getGif } from "../../helpers/getGifs";

describe('getGif Fetch', () => {

    test('should get 10 elements', async () => {
        
        const gifs = await getGif('One punch');

        expect(gifs.length).toBe(10);
    })
    
    test('should get 0 elements', async () => {
        
        const gifs = await getGif('');

        expect(gifs.length).toBe(0);
    })
});
