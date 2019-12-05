import { newE2EPage } from '@stencil/core/testing';

describe('dates-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dates-display></dates-display>');

    const element = await page.find('dates-display');
    expect(element).toHaveClass('hydrated');
  });
});
