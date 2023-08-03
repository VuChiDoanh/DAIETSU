window.DichVuController = function ($scope, $routeParams) {

    document.title = 'Dịch Vụ';


    
    $scope.alert=false
    $scope.dissAlert = function () {
        $scope.alert=false
    }


    $scope.check = {
        ten: false,
        email:false,
        sdt:false,
        dichvu:false,
        noidung:false
    }
    $scope.submit = function () {
        let flag = true;
        if (!$scope.ten) {
            $scope.check.ten = true;
            flag = false
        } else {
            $scope.check.ten = false;
        }
        if (!$scope.email || !$scope.validateEmail($scope.email)) {
            $scope.check.email = true;
            flag = false

        } else {
            $scope.check.email = false;
        }

        if (!$scope.sdt || !/^(0\d{9}|0\d{3}[\s-]\d{3}[\s-]\d{3})$/.test($scope.sdt)) {
            $scope.check.sdt = true;
            flag = false

        } else {
            $scope.check.sdt = false;
        }

        if (!$scope.dichvu) {
            $scope.check.dichvu = true;
            flag = false

        } else {
            $scope.check.dichvu = false;
        }

        if (!$scope.noidung) {
            $scope.check.noidung = true;
            flag = false

        } else {
            $scope.check.noidung = false;
        }

        if (flag) {
            $scope.sendEmail();
        }
    }

    $scope.sendEmail = function () {
        Email.send({
            SecureToken: "365de453-196d-490e-a0d3-4b1abdfe13be",
            To: 'vuchidoanh100k@gmail.com',
            From: "vuchidoanh2003@gmail.com",
            Subject: $scope.ten + "Đang quan tâm tới " + $scope.dichvu + " của bạn",
            Body: ' - Tên: ' + $scope.ten + "\n" + ' - Email: ' + $scope.email + "\n" + ' - SĐT: ' + $scope.sdt + "\n" + ' - Nội dung: ' + $scope.noidung
        })
        $scope.alert = true
    }
    $scope.validateEmail = function (email) {
        var pattern = /^\w+@\w+.\w{2,7}.\w{2,5}$/;
        return pattern.test(email);
    };

}
