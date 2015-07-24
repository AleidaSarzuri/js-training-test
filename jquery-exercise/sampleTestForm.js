/**
 * Created by aleidasarzuri on 7/24/2015.
 */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000; //intervalo en mili segundoes
describe('',function(){
    it('Should returns Jquery',function(done){

        var browser = new WebDriver.Builder()
            .withCapabilities(WebDriver.Capabilities.chrome())
            .build();

        browser.get('http://parsleyjs.org/doc/examples/simple.html').then(done);
    });
});
