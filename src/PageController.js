function PageController() {
  var vm = this;

  vm._state = {
    page: 1
  };

  vm.gotoPage = gotoPage;
  vm.goForward = goForward;
  vm.goBack = goBack;
  vm.getCurrentPage = getCurrentPage;

  function gotoPage(page) {
    vm._state.page = page;
  }

  function goForward() {
    var page = vm._state.page + 1;
    gotoPage(page);
  }

  function goBack() {
    var page = vm._state.page - 1;
    gotoPage(page);
  }

  function getCurrentPage() {
    return vm._state.page;
  }
}
