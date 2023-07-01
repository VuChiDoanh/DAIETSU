window.HomeController = function ($scope, $location) {
    $location.path('/home')
    document.title = 'Trang Chủ';




    $scope.danhsach = [
        {
            link: "may-loc-nuoc-kiem-HU-150",
            ten: "Máy lọc nước kiềm HU-150",
            gia: "42.000.000 ₫",
            image: {
                0: "images/HU-150-1.jpg",
                1: "images/HU-150-2.jpg",
                2: "images/HU-150-3.jpg",
                3: "images/HU-150-4.jpg",
                4: "images/HU-150-5.jpg",
            },
            motangan: "Lọc sạch theo tiêu chuẩn Nhật Bản. Lọc nước uống trực tiếp từ nguồn nước thủy cục, không cần đun sôi nước sau khi lọc mà uống trực tiếp. Lọc sạch kim loại nặng cũng như các chất cặn bẩn có trong nước và bổ xung khoáng chất có lợi cho cơ thể.Nước điện giải dùng để uống rất tổt cho sức khỏe, phòng ngừa các bệnh về đường tiêu hóa, dạ dày, xương khớp… mà nguyên nhân chủ yếu là do chế độ ăn uống mất cân bằng gây nên tình trạng thừa Axit trong cơ thể. Khi sử dụng nước này sẽ cân bằng lại cơ thể, giúp tăng cường sức khỏe.",
            mota: {
                0: "images/HU-150-mota0.png",
                1: "images/HU-150-mota1.png",
                2: "images/HU-150-mota2.png",
                3: "images/HU-150-mota3.png",
                4: "images/HU-150-mota4.png",
                5: "images/HU-150-mota5.png",
                6: "images/HU-150-mota6.png",
                7: "images/HU-150-mota7.png",
            },

        },
        {
            link: "bo-tien-loc-OC-1000",
            ten: "Bộ tiền lọc OC-1000",
            gia: "6.000.000 ₫",
            image: {
                0: "images/OC-1000-1.jpg",
                1: "images/OC-1000-2.jpg",
            },
            motangan: "Công nghệ lọc UF tiên tiến nhất, kết hợp giữa RO và Nano. Lọc sạch hầu hết các phân tử lớn từ nước; các tạp chất có kích thước nhỏ hơn cả vi khuẩn và tiêu diệt được vi khuẩn tới 99.9%.Lắp đặt tiện lợi và gọn nhẹ ẩn dưới bồn rửa, mang lại thẩm mỹ cho căn bếp. Sản xuất bởi Tập đoàn OSG, 100% xuất xứ Nhật Bản",
            mota: {
                0: "images/OC-1000-mota-1.png",
                1: "images/OC-1000-mota-2.png",
                2: "images/OC-1000-mota-3.png",
            },

        },
        {
            link: "may-loc-nuoc-kiem-NDX-501LM",
            ten: "Máy lọc Nước kiềm NDX-501LM",
            gia: "65.000.000 ₫",
            image: {
                0: "images/NDX-501LM-1.jpg",
                1: "images/NDX-501LM-2.png",
                2: "images/NDX-501LM-3.png",

            },
            motangan: "",
            mota: {
                0: "images/NDX-501LM-mota1.jpg",
                1: "images/NDX-501LM-mota2.png",
                2: "images/NDX-501LM-mota3.png",
                3: "images/NDX-501LM-mota4.png",
                4: "images/NDX-360-500LW-mota1.png",
                5: "images/NDX-360-500LW-mota2.png",
                6: "images/NDX-360-500LW-mota3.png",
                7: "images/NDX-360-500LW-mota4.png",
            },

        },
        {
            link: "may-loc-nuoc-kiem-NDX-360PLW",
            ten: "Máy lọc Nước kiềm NDX-360PLW",
            gia: "Liên hệ trực tiếp",
            image: {
                0: "images/NDX-360PLW-1.jpg",
                1: "images/NDX-360PLW-2.jpg",
                2: "images/NDX-360PLW-3.jpg",
                3: "images/NDX-360PLW-4.jpg",


            },
            motangan: "Là dòng máy điện giải có công suất lớn tạo ra nguồn nước sạch có tính kiềm với nhiều tác dụng tốt cho sức khỏe và giúp món ăn thêm thơm ngon và bổ dưỡng hơn, từ đó, nâng cao hình ảnh thương hiệu cho doanh nghiệp. Đây cũng là cách tốt nhất tạo ra sự nổi bật giúp doanh nghiệp khác biệt với những cơ sở kinh doanh cùng lĩnh vực.",
            mota: {
                0: "images/NDX-360PLW-mota1.jpg",
                1: "images/NDX-360PLW-mota2.jpg",
                2: "images/NDX-360PLW-mota3.jpg",
                3: "images/NDX-360PLW-mota4.jpg",
                4: "images/NDX-360-500LW-mota1.png",
                5: "images/NDX-360-500LW-mota2.png",
                6: "images/NDX-360-500LW-mota3.png",
                7: "images/NDX-360-500LW-mota4.png",
            },

        },
        {
            link: "may-loc-nuoc-kiem-GW665",
            ten: "Máy lọc Nước kiềm GW665",
            gia: "65.000.000 ₫",
            image: {
                0: "images/GW-665-2.png",
                1: "images/GW-665-3.png",
            },
            motangan: "",
            mota: {
                0: "images/GW-665-mota1.png",
                1: "images/GW-665-mota2.png",
            },

        },
        {
            link: "loi-loc-HUR-K",
            ten: "Lõi lọc HUR-K",
            gia: "4.000.000 ₫",
            image: {
                0: "images/HU-K.jpg",
            },
            motangan: "Dù được cấu tạo từ các vật liệu cao cấp, chất lượng nhưng lõi lọc (còn gọi là lõi lọc tinh hay lõi lọc trong) nào cũng sẽ đều phải thay định kỳ trong quá trình sử dụng máy điện giải iON kiềm. Chính vì vậy, ngoài giá thay lõi OSG Human Water HU-121 thì thời gian thay lõi cũng là mối quan tâm lớn của người tiêu dùng hiện nay. Bài viết sau đây sẽ giải đáp cho khách hàng về mọi thông tin về lõi lọc máy lọc nước iON kiềm OSG Human Water HU-121 cũng như địa chỉ uy tín cung cấp dịch vụ thay lõi lọc tinh tốt nhất thị trường.",
            mota: {


            },

        },
        {
            link: "may-loc-nuoc-kiem-NDX-3000LMW",
            ten: "Máy lọc Nước kiềm NDX-3000LMW",
            gia: "Liên hệ trực tiếp",
            image: {
                0: "images/NDX-3000LMW-1.png",
                1: "images/NDX-3000LMW-2.png",
                2: "images/NDX-3000LMW-3.jpg",

            },
            motangan: "      Thiết kế đặc biệt phù hợp với công suất lớn, để có thể cung cấp 3000 lít nước ion kiềm mỗi giờ, đồng thời thiết kế dễ vận hành, lắp đặt và bảo trì thuận tiện. Thiết bị cực kỳ phù hợp để sử dụng trong các nhà máy sản xuất nước đóng chai.",
            mota: {
                0: "images/NDX-3000LMW-mota1.png",
                1: "images/NDX-3000LMW-mota2.png",
                2: "images/NDX-3000LMW-mota3.png",
                3: "images/NDX-3000LMW-mota4.png",

            },
            

        },
        {
            link: "loi-loc-LF-CIA",
            ten: "Lõi lọc LF-CIA",
            gia: "6.000.000 ₫",
            image: {
                0: "images/not-found.png",

            },
            motangan: "Lõi lọc thay thế của máy lọc nước kiềm GW-665",
            mota: {
                0: "images/not-found.png",


            },
            

        },
        {
            link: "loi-loc-OC-1000",
            ten: "Lõi lọc thay thế OC-1000",
            gia: "2.500.000 ₫",
            image: {
                0: "images/not-found.png",
            },
            motangan: "Công nghệ lọc UF tiên tiến nhất, kết hợp giữa RO và Nano. Lọc sạch hầu hết các phân tử lớn từ nước; các tạp chất có kích thước nhỏ hơn cả vi khuẩn và tiêu diệt được vi khuẩn tới 99.9%.Lắp đặt tiện lợi và gọn nhẹ ẩn dưới bồn rửa, mang lại thẩm mỹ cho căn bếp. Sản xuất bởi Tập đoàn OSG, 100% xuất xứ Nhật Bản",
            mota: {
                0: "images/not-found.png",

            },

        },
        {
            link: "loi-loc-P3C3",
            ten: "Lõi lọc thay thế P3C3",
            gia: "Liên hệ trực tiếp",
            image: {
                0: "images/not-found.png",

            },
            motangan: "",
            mota: {
                0: "images/not-found.png",

            },

        },
        {
            link: "loi-loc-P3M2",
            ten: "Lõi lọc thay thế P3M2",
            gia: "Liên hệ trực tiếp",
            image: {
                0: "images/not-found.png",

            },
            motangan: "images/not-found.png",
            mota: {
                0: "images/not-found.png",

            },

        },
    ]








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
            index = 2 // số lượng ảnh -1 
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

    $scope.soSanPhamHienThi = function() {
        return 8;
    };

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