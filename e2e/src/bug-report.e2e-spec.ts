import { ShowcasePage } from './showcase.po';
import {browser, by, element, ExpectedConditions as EC, logging} from 'protractor';

describe('Bug Report', () => {
    let page: ShowcasePage;

    beforeEach(() => {
        page = new ShowcasePage();
    });

    fit('dialog should pop up and set values and config according to setup.', async () => {

        await ShowcasePage.navigateTo();

        const containerCard = element(by.id('bugReportDialog'));

        await ShowcasePage.typeIn(containerCard, 'title', 'abc');
        await ShowcasePage.typeIn(containerCard, 'devInfo', 'def');
        await ShowcasePage.typeIn(containerCard, 'reporterName', 'ghi');
        await ShowcasePage.typeIn(containerCard, 'reporterEmail', 'jkl');
        await element(by.name('hideTitle')).click();
        await element(by.name('hideComment')).click();

        let dialogContainer = await ShowcasePage.openDialog(containerCard);
        await browser.sleep(10000);

        await expect(dialogContainer.element(by.name('title')).isPresent()).toBeTruthy()
        await expect(dialogContainer.element(by.name('comment')).isPresent()).toBeFalsy();
        await expect(dialogContainer.element(by.name('reporterName')).isPresent()).toBeTruthy();
        await expect(dialogContainer.element(by.name('reporterEmail')).isPresent()).toBeTruthy();
        await expect(dialogContainer.element(by.name('title')).getAttribute("value")).toEqual("abc")
        await expect(dialogContainer.element(by.name('reporterName')).getAttribute("value")).toEqual("ghi")
        await expect(dialogContainer.element(by.name('reporterEmail')).getAttribute("value")).toEqual("jkl")

        await dialogContainer.all(by.tagName('button')).last().click();
        await browser.wait(EC.stalenessOf(dialogContainer));
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
