describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have upcoming launchers screen', async () => {
    await expect(element(by.id('upcoming-launchers-screen'))).toBeVisible();
  });
});
