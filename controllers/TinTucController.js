window.TinTucController = function ($scope, $routeParams) {

    document.title = 'Tin tức';
    $scope.sapxep = 'Sắp xếp';

    $scope.loai = 'Tất Cả Sản Phẩm';


// chuyển trang
const links = document.querySelectorAll("a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        if (isMenuOpen) {
            menu.classList.add("hidden");
            menu.classList.remove("space-y-8")
        }
        window.requestAnimationFrame(scrollUp);
        
    });
});














}
