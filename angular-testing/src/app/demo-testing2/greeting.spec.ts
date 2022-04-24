import { greet } from "./greeting";

describe('greet',()=>{

    it('should include name in message',()=>{

        expect(greet("asnan")).toContain("welcome asnan");
    })

});