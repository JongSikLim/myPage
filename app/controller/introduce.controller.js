Portfolio.controller('introduce', ($scope, $rootScope, $state) => {
    const vm = $scope;

    let nowActiveSheet = 1;


    initSheet();

    vm.navSheet = (sheetNumber) => {
        nowActiveSheet = changeSheet(sheetNumber, nowActiveSheet);

    }

    setEventListener();


});


window.addEventListener('resize', (e) => {
    // initSheet();
})

function setEventListener() {
    let container = document.querySelector(".intro-container");

    container.addEventListener('wheel', (e) => {

        if (e.deltaY > 0) {
            //스크롤 다운
            scrollDown();
        }
        else if (e.deltaY < 0) {
            //스크롤 업       
            scrollUp();
        }
    });


}

function initSheet() {
    console.log('initSheet!');
    let windowHeight = window.innerHeight;
    let navHeight = 60;
    let contentAreaHeight = windowHeight - navHeight;

    let container = document.querySelector(".intro-container");
    let sheet1 = document.querySelector(`#sheet-1`);
    let sheet2 = document.querySelector(`#sheet-2`);

    container.style.height = `${contentAreaHeight}px`;
    sheet1.style.height = `${contentAreaHeight}px`;
    sheet2.style.height = `${contentAreaHeight}px`;
}

function changeSheet(sheetNumber, nowActiveSheet) {
    let sheet1 = document.querySelector(`#sheet-1`);
    let sheet2 = document.querySelector(`#sheet-2`);
    let container = document.querySelector(".intro-container");

    let windowHeight = window.innerHeight;
    let navHeight = 60;
    let contentAreaHeight = windowHeight - navHeight;

    if (sheetNumber === 1) {
        // sheet1.style.top = "0px";
        // sheet2.style.top = `${contentAreaHeight}px`;
        container.scrollTo(0, 0);
    }
    else if (sheetNumber === 2) {
        // sheet1.style.top = `-${contentAreaHeight}px`;
        // sheet2.style.top = "0px";
        container.scrollTo(0, contentAreaHeight);
    }

    return sheetNumber;
}


function scrollUp() {
    let container = document.querySelector(".intro-container");
    let windowHeight = window.innerHeight;
    let navHeight = 60;
    let contentAreaHeight = windowHeight - navHeight;

    container.scrollTo(0, 0);
    // container.style.transform = `translate(0, 0)`;
    let sheet1 = document.querySelector(`#sheet-1`);
    let sheet2 = document.querySelector(`#sheet-2`);

    swipeImgUp();
}

function scrollDown() {
    let container = document.querySelector(".intro-container");
    let windowHeight = window.innerHeight;
    let navHeight = 60;
    let contentAreaHeight = windowHeight - navHeight;

    container.scrollTo(0, contentAreaHeight);
    swipeImgDown();
}


function swipeImgUp(){
    let img = document.querySelector('.container-swipe-image-area');

    img.style.transform = "translateY(0px)";
    img.style.transition = "0.4s"
    img.style.transitionTimingFunction = "ease-in-out";
}

function swipeImgDown(){
    console.log('swipe down!');
    let img = document.querySelector('.container-swipe-image-area');

    img.style.transform = "translateY(-500px)";
    img.style.transition = "0.4s"
    img.style.transitionTimingFunction = "ease-in-out";

}