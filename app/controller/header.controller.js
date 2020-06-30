Portfolio.controller('header', ($scope, $rootScope, $state)=>{
    let vm = $scope;


    vm.state = 'PROFILE';
    vm.changeState = (state)=>{
        vm.state = state;
        $state.go(state);
    }
});