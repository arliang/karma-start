describe('PageController test', function() {
  var pageCtrl = new PageController(),
      page = 3;

  beforeEach(function() {
    pageCtrl.gotoPage(page);
  });

  it('should go to custom page', function () {
    pageCtrl.gotoPage(5);
    expect(pageCtrl.getCurrentPage()).toBe(5);
  });

  it('should go forward', function(){
    pageCtrl.goForward();
    expect(pageCtrl.getCurrentPage()).toBe(page + 1);
  });

  it('should go back', function(){
    pageCtrl.goBack();
    expect(pageCtrl.getCurrentPage()).toBe(page - 1);
  });

  it('should return current page', function(){
    expect(pageCtrl.getCurrentPage()).toBe(page);
  });

});
