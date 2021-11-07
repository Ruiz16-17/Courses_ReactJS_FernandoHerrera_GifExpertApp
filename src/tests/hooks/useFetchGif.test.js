import { renderHook } from '@testing-library/react-hooks';
import { useFetchGif } from "../../hooks/useFetchGif";

describe('Test on useFetchGif hook', () => {
    
    test('should return the initial state', async () => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif('One Punch Man'))
        const {loading, data: images} = result.current;
        
        await waitForNextUpdate();

        expect(images).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('should return images array and loading to be equals to false', async () => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif('One Punch Man'))

        await waitForNextUpdate();

        const {loading, data: images} = result.current;
    
        expect(images.length).toBe(10);
        expect(loading).toBe(false);
        
    })
    
    
})
