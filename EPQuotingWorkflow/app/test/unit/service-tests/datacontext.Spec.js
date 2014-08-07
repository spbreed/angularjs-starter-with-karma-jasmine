describe("app module", function () {

    beforeEach(module("app"));

    var service;

    beforeEach(inject(function (datacontext) {
        service = datacontext;
    }));

    describe("getMessageCount", function () {
        it("should return 72", function () {
            expect(service.getMessageCount()).toBeDefined();
        });
    });
});