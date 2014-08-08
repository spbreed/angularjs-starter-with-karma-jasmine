describe("app module", function () {
    beforeEach(module("app"));

    describe("dashboard", function () {
        var scope,
            controller;
        

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign Dashboard as title", function () {
           var vm = controller("dashboard", { $scope: scope });
           expect(vm.title).toBe("kDashboard");
        });
    });
});

