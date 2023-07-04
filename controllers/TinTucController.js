window.TinTucController = function ($scope, $routeParams) {

    document.title = 'Tin tức';
    $scope.sapxep = 'Sắp xếp';

    $scope.loai = 'Tất Cả Sản Phẩm';


    $scope.sendEmail = function () {
        Email.send({
            SecureToken: "365de453-196d-490e-a0d3-4b1abdfe13be",
            To: 'vuchidoanh2003@gmail.com',
            From: "vuchidoanh2003@gmail.com",
            Subject: $scope.ten + ' Đang quan tâm tới dịch vụ của bạn',
            Body: ' - Tên: ' + $scope.ten + "\n" + ' - Email: ' + $scope.email + "\n" + ' - SĐT: ' + $scope.sdt + "\n" + ' - Nội dung: ' + $scope.noidung
        }).then(
            message => alert(message)
        );
    }
















}
