window.HomeController = function ($scope, $location, $http) {
    $location.path('/home')
    document.title = 'Daietsu - Trang chủ';
    







    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector('.aspect-ratio-169')
    const dotItem = document.querySelectorAll(".dot")
    const rightSlider = document.querySelector('.right_slider')
    const leftSlider = document.querySelector('.left_slider')
    let imgNumber = imgPosition.length
    let index = 0
    // console.log(imgPosition)
    imgPosition.forEach(function (image, index) {
        image.style.left = index * 100 + "%"
        dotItem[index].addEventListener("click", function () {
            slider(index)
        })
    })

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0
        }
        slider(index)
    }
    rightSlider.addEventListener("click", function () {
        index++;
        if (index >= imgNumber) {
            index = 0
        }
        slider(index)
    })
    leftSlider.addEventListener("click", function () {
        index--;
        if (index >= imgNumber || index < 0) {
            index = 3 // số lượng ảnh -1 
        }
        slider(index)
    })

    function slider(index) {
        imgContainer.style.left = "-" + index * 100 + "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove("active");
        dotItem[index].classList.add("active");
    }
    let slideInterval;

    // Khởi tạo interval 
    slideInterval = setInterval(imgSlide, 2000);

    imgPosition.forEach(function (image) {
        image.addEventListener("mouseenter", function () {
            clearInterval(slideInterval); // Hủy interval khi hover 
        });

        image.addEventListener("mouseleave", function () {
            slideInterval = setInterval(imgSlide, 2000); // Khởi động lại interval
        });

    });
    rightSlider.addEventListener("mouseenter", function () {
        clearInterval(slideInterval); // Hủy interval khi hover 
    });

    rightSlider.addEventListener("mouseleave", function () {
        slideInterval = setInterval(imgSlide, 2000); // Khởi động lại interval
    });

    leftSlider.addEventListener("mouseenter", function () {
        clearInterval(slideInterval); // Hủy interval khi hover 
    });

    leftSlider.addEventListener("mouseleave", function () {
        slideInterval = setInterval(imgSlide, 2000); // Khởi động lại interval
    });
    // _________________________________________________


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
    const groups = document.querySelectorAll("div.group");
    groups.forEach(function (group) {
            group.addEventListener("click", function () {
                if (isMenuOpen) {
                    menu.classList.add("hidden");
                    menu.classList.remove("space-y-8")
                }
                window.requestAnimationFrame(scrollUp);
                
            });
        });
        
        function scrollUp() {
            // Lấy vị trí hiện tại của scroll
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
            // Nếu vị trí scroll lớn hơn 0
            if (currentScroll > 0) {
                // Thực hiện việc trượt mượt hơn
                window.requestAnimationFrame(scrollUp);
    
                // Lấy khoảng cách để trượt và chia cho một số lượng frame nhất định
                // để tạo ra hiệu ứng trượt mượt hơn
                var distanceToScroll = currentScroll - (currentScroll / 10);
                document.documentElement.scrollTop = distanceToScroll;
                document.body.scrollTop = distanceToScroll;
            }
        }
    // _________________________________________________

        $scope.scrollUp = function (){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
            // Nếu vị trí scroll lớn hơn 0
            if (currentScroll > 0) {
                // Thực hiện việc trượt mượt hơn
                window.requestAnimationFrame(scrollUp);
    
                // Lấy khoảng cách để trượt và chia cho một số lượng frame nhất định
                // để tạo ra hiệu ứng trượt mượt hơn
                var distanceToScroll = currentScroll - (currentScroll / 10);
                document.documentElement.scrollTop = distanceToScroll;
                document.body.scrollTop = distanceToScroll;
            }
        }



}