import {BugReport} from './bug-report.class';
import {TestBed} from '@angular/core/testing';

describe('BugReport', () => {


    const aBugReport = new BugReport({
        title: "a serious error",
        devInfo: "in line 7"
    });


    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: "APP_VERSION",
                    useValue: '6.6.6'
                },
                {
                    provide: "APP_NAME",
                    useValue: 'serious app'
                }
            ]
        });
    });


    it('should take time as defaults', () =>  {

        expect(aBugReport.url).toEqual('d');
    });

    it('should get defaults from provided APP_VERSION and APP_NAME', () =>  {

        expect(aBugReport.version).toEqual("6.6.6");
        expect(aBugReport.product).toEqual('serious app');
    });


});
