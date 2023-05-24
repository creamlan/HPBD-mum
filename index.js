const contentLetterSrart_actived = "Con xin chúc mẹ một ngày sinh nhật thật tuyệt vời và ý nghĩa" //Lời mở đầu cho bức thư
const mainContentLetter = "Hôm nay là ngày sinh nhật của mẹ, con xin chúc mẹ một ngày sinh nhật thật tuyệt vời và ý nghĩa. Mẹ là người mẹ tuyệt vời nhất của con, mẹ luôn là người đồng hành và ủng hộ con trong mọi thử thách của cuộc đời. Con cảm ơn mẹ vì tất cả những điều mẹ đã làm cho con. Chúc mừng sinh nhật mẹ, con yêu mẹ rất nhiều và sẽ luôn đồng hành và ủng hộ mẹ trong suốt cuộc đời. Yêu mẹ"

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/img2.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/img4.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
// Tạo một thẻ canvas và chèn vào trang web
var canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.pointerEvents = 'none';
canvas.style.left = '0px';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.id = "snowfall";
document.body.appendChild(canvas);

// Lấy context của canvas
var ctx = canvas.getContext('2d');

// Tạo các hạt tuyết và lưu trữ chúng trong một mảng
var snowflakes = [];
var numSnowflakes = 100;
for (var i = 0; i < numSnowflakes; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1,
    speed: Math.random() * 2 + 1,
    opacity: Math.random()
  });
}

// Vẽ các hạt tuyết lên canvas
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle= '#ffffff';
  ctx.beginPath();
  for (var i = 0; i < numSnowflakes; i++) {
    var snowflake = snowflakes[i];
    ctx.moveTo(snowflake.x, snowflake.y);
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
  }
  ctx.fill();
  
  // Di chuyển các hạt tuyết lên trên và quay trở lại khi chúng vượt ra khỏi màn hình
  for (var i = 0; i < numSnowflakes; i++) {
    var snowflake = snowflakes[i];
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
      snowflake.y = -snowflake.radius;
      snowflake.x = Math.random() * canvas.width;
    }
  }
  
  // Gọi hàm vẽ lại sau một khoảng thời gian nhất định
  requestAnimationFrame(drawSnowflakes);
}

// Bắt đầu vẽ các hạt tuyết lên canvas
drawSnowflakes();