import { ShowcasePage } from './showcase.po';
import {browser, by, element, ExpectedConditions as EC, logging} from 'protractor';


describe('Bug Report', () => {
    let page: ShowcasePage;

    beforeEach(() => {
        page = new ShowcasePage();
    });

    const containerCard = element(by.id('bugReportDialog'));

    it('dialog should pop up and set values and config according to setup.', async () => {

        await ShowcasePage.navigateTo();

        await ShowcasePage.typeIn(containerCard, 'title', 'abc');
        await ShowcasePage.typeIn(containerCard, 'devInfo', 'def');
        await ShowcasePage.typeIn(containerCard, 'reporterName', 'ghi');
        await ShowcasePage.typeIn(containerCard, 'reporterEmail', 'jkl');
        await element(by.name('hideTitle')).click();
        await element(by.name('hideComment')).click();

        let dialogContainer = await ShowcasePage.openDialog(containerCard);

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


    xit('dialog should return error, if can not send BugReport to target.', async () => {

        await ShowcasePage.navigateTo();

        await ShowcasePage.selectFromMatSelect(element(by.id("bugReportTargetKey")), 'dummy')

        const dialogContainer = await ShowcasePage.openDialog(containerCard);

        await dialogContainer.element(by.id('report-bug-send')).click();

        await browser.wait(EC.stalenessOf(dialogContainer));

        console.log("XX:" + await containerCard.element(by.css('.result')).getText());
        const result = await containerCard.element(by.css('.result')).getText();

        await expect(result)
            .toEqual('Result: Error when reporting issue to GitHub (iqb-berlin/non-existing-repo).');

        // at this point we resign from testing the success case since http mockModule for angular
        // and setting up a complete mock-backend for this single call would be to much overhead
        // https://github.com/angular/protractor/blob/88a1b3a30386771bcb84eb6b79d19fa256589f2c/lib/browser.ts#L971-L972
    });


    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
