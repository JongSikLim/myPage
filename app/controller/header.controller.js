Portfolio.controller('header', ($scope, $rootScope, $state)=>{
    let vm = $scope;


    vm.state = 'PROFILE';
    vm.changeState = (state)=>{
        vm.state = state;
        $state.go(state);
    }

    vm.scrollToAngular = (nav)=>{
        console.log('nav: ', nav);
        
        let targetEl = document.querySelector(`#${nav}`);
        let rect =targetEl.getBoundingClientRect();
        console.log('targetY: ', rect);

        window.scroll({
            behavior : 'smooth',
            top: rect.y +window.scrollY
        })
    }
});