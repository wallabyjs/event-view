describe('Event View E2E Tests', function () {

	var expectedMsg = 'Event View';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.className('mdl-layout-title')).getText()).toEqual(expectedMsg);
  });

});
