describe('version', function () {

    describe('unit testing', function () {

        describe('test buildCartItems function', function () {
            var v1 = '1.1.1';
            var v2 = '2.1.1';
            it('should print v2', function () {

                spyOn(console, 'log');
                versionCompare(v1, v2)
                expect(console.log).toHaveBeenCalledWith(2);
            });
        });
        describe('test buildCartItems function', function () {
            var v1 = '3.1.1';
            var v2 = '2.1.1';
            it('should print v2', function () {

                spyOn(console, 'log');
                versionCompare(v1, v2)
                expect(console.log).toHaveBeenCalledWith(1);
            });
        });
        describe('test buildCartItems function', function () {
            var v1 = '1.1.1';
            var v2 = '1.1.1';
            it('should print v2', function () {

                spyOn(console, 'log');
                versionCompare(v1, v2)
                expect(console.log).toHaveBeenCalledWith('=');
            });
        });
    });
});
