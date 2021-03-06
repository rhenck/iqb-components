import { ShowcasePage } from './showcase.po';
import { browser, by, element, logging, ExpectedConditions as EC } from 'protractor';

describe('Message Dialog', () => {
    let page: ShowcasePage;

    beforeEach(() => {
        page = new ShowcasePage();
    });

    it('should pop up and set buttons and labels according to setup.', async () => {
        await ShowcasePage.navigateTo();

        const containerCard = element(by.id('messageDialog'));

        await ShowcasePage.typeIn(containerCard, 'title', 'abc');
        await ShowcasePage.typeIn(containerCard, 'content', 'def');
        await ShowcasePage.typeIn(containerCard, 'closebuttonlabel', 'ghi');
        await ShowcasePage.selectFromMatSelect(containerCard, 'info');

        let dialogContainer = await ShowcasePage.openDialog(containerCard);

        await expect(dialogContainer.element(by.tagName('h1')).getText()).toContain('abc');
        await expect(dialogContainer.element(by.tagName('mat-dialog-content')).getText()).toBe('def');
        await expect(dialogContainer.element(by.tagName('button')).getText()).toBe('ghi');
        await expect(dialogContainer.element(by.tagName('mat-icon')).getText()).toContain('info');

        await dialogContainer.all(by.tagName('button')).last().click();
        await browser.wait(EC.stalenessOf(dialogContainer));

        await ShowcasePage.typeIn(containerCard, 'title', '');
        await ShowcasePage.selectFromMatSelect(containerCard, 'error');

        dialogContainer = await ShowcasePage.openDialog(containerCard);

        await expect(dialogContainer.element(by.tagName('h1')).getText()).toContain('Achtung: Fehler');
        await expect(dialogContainer.element(by.tagName('mat-icon')).getText()).toContain('error');

    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
