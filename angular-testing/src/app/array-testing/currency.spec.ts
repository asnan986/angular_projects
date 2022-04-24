import { getCurrency } from "./currency"
describe ('getCurrency', ()=>{
    it('should return 0 if input is negative', ()=>{
    
        const result = getCurrency();
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        expect(result).toContain('USD');
    });
    
    });