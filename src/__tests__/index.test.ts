import { add } from "../utils/Add";


describe("Add Function", () => {
    test("calls add function", () => {
        expect(add(1,2)).toBe(3);

    });
});