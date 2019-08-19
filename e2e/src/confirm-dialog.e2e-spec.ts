import { AppPage } from './app.po';
import { browser, by, element, logging, ExpectedConditions as EC } from 'protractor';

describe('Confirm Dialog', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should pop up and set buttons and labels according to setup.', async () => {

        await AppPage.navigateTo();

        const containerCard = element(by.id('confirmDialog'));

        await AppPage.typeIn(containerCard, 'title', 'abc');
        await AppPage.typeIn(containerCard, 'content', 'def');
        await AppPage.typeIn(containerCard, 'confirmbuttonlabel', 'ghi');

        let dialogContainer = await AppPage.openDialog(containerCard);

        await expect(dialogContainer.element(by.tagName('h1')).getText()).toBe('abc');
        await expect(dialogContainer.element(by.tagName('p')).getText()).toBe('def');
        await expect(dialogContainer.element(by.css('button.mat-primary')).getText()).toBe('ghi');
        await expect(dialogContainer.all(by.tagName('button')).count()).toEqual(2);

        await dialogContainer.all(by.tagName('button')).last().click();
        await browser.wait(EC.stalenessOf(dialogContainer));

        await expect(containerCard.element(by.css('.result')).getText()).toBe('Result: false');

        await containerCard.element(by.tagName('mat-checkbox')).click();
        await AppPage.typeIn(containerCard, 'title', '');

        dialogContainer = await AppPage.openDialog(containerCard);
        await browser.wait(EC.presenceOf(dialogContainer));

        await expect(dialogContainer.all(by.tagName('button')).count()).toEqual(1);
        await expect(dialogContainer.element(by.tagName('h1')).getText()).toBe('Bitte bestätigen!');

        await dialogContainer.all(by.tagName('button')).first().click();
        await browser.wait(EC.stalenessOf(dialogContainer));

        await expect(containerCard.element(by.css('.result')).getText()).toBe('Result: true');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
