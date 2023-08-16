describe('Environment Variable', () => {
    // Mock process.env for testing
    const originalEnv = process.env;
    beforeAll(() => {
      process.env.EXAMPLE_KEY = 'test-key';
    });
  
    afterAll(() => {
      process.env = originalEnv;
    });
  
    it('should have EXAMPLE_KEY environment variable', () => {
      expect(process.env.EXAMPLE_KEY).toBeDefined();
    });
  
    //change environment variable name to the correct name
    it('should return correct key', () => {
      const myKey = process.env.MY_KEY;
      expect(myKey).toBe('test-key');
    });
  });