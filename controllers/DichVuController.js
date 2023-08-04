window.DichVuController = function ($scope, $routeParams) {

    document.title = 'Dịch Vụ';

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

    $scope.alert = false
    $scope.dissAlert = function () {
        $scope.alert = false
    }


    $scope.check = {
        ten: false,
        email: false,
        sdt: false,
        dichvu: false,
        noidung: false
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
            Host: "smtp.elasticemail.com",
            Username: "info@dets.co.jp",
            Password: "54FF8710886FB38F4872FA3338BC3962C542",
            To: 'info@dets.co.jp',
            From: "info@dets.co.jp",
            Subject: $scope.ten + ' Đang quan tâm tới ' + $scope.dichvu + " của bạn",
            Body: ' - Tên: ' + `<strong>` + $scope.ten + `</strong>` + `<br><br>` + ' - Email: ' + `<strong>` + $scope.email + `</strong>` + `<br><br>` + ' - SĐT: ' + `<strong>` + $scope.sdt + `</strong>` + `<br><br>` + ' - Loại dịch vụ: ' + `<strong>` + $scope.dichvu + `</strong>` + `<br><br>` + ' - Nội dung: ' + `<strong>` + $scope.noidung + `</strong>`
        })
        $scope.alert = true
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.alert = false;
            });
        }, 4000);
    }
    $scope.validateEmail = function (email) {
        var pattern = /^\w+@\w+.\w{2,7}.\w{2,5}$/;
        return pattern.test(email);
    };

}
