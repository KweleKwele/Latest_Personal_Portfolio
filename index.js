
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".leftLogosBlock");
    let elements = container.children;
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let positions = [];

    container.style.position = "relative";

    function randomizePositions() {
        positions = [];

        for (let element of elements) {
            element.style.width = "70px";
            element.style.height = "70px";
            element.style.position = "absolute";

            let randomX, randomY, isOverlapping;

            do {
                randomX = Math.floor(Math.random() * (containerWidth - 50));
                randomY = Math.floor(Math.random() * (containerHeight - 50));

                isOverlapping = positions.some(pos => 
                    Math.abs(pos.x - randomX) < 60 && Math.abs(pos.y - randomY) < 60
                );
            } while (isOverlapping);

            positions.push({ x: randomX, y: randomY });


            element.style.left = `${randomX}px`;
            element.style.top = `${randomY}px`;
        }
    }

    randomizePositions();
    setInterval(randomizePositions, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.links ul li a'); 

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.classList.add('glowing');
        });
        link.addEventListener('mouseout', function() {
            link.classList.remove('glowing');
        });
    });
});



const iconsFolder = "icons/";


const imageArray = [
    "4373217_java_logo_logos_icon.png",
    "65687_html_logo_html5_5_five_icon.png",
    "317756_badge_css_css3_achievement_award_icon.png",
    "652581_code_command_develop_javascript_language_icon.png",
    "1012821_code_development_logo_mysql_icon.png",
    "database.png"
]

const container = document.getElementById("slideShow-container");

let currentIndex = 0;

function showImage() {
    container.innerHTML = "";

    let img = document.createElement("img");

    img.src = iconsFolder + imageArray[currentIndex];
    img.width = 200;
    img.height = 200;
    img.style.margin = "5px";

    container.appendChild(img);

    currentIndex = (currentIndex + 1) % imageArray.length;
}

showImage();

setInterval(showImage, 3000);


// -----------------piechart------------------

const canvas = document.getElementById('skillsChart');
const ctx = canvas.getContext('2d');

const skillsData = {
    labels: ["Communication", "Teamwork", "Problem-Solving", "Leadership", "Adaptability"],
    datasets: [{
        label: "Skill Level (out of 10)",
        data: [8, 7, 9, 6, 7],  
        backgroundColor: "skyblue",
        borderColor: "blue",
        borderWidth: 1
    }]
};

new Chart(ctx, {
    type: 'bar',
    data: skillsData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});

// -------------------cv Download----------------

document.getElementById('cvDownloadBtn').addEventListener("click",function() {

    const link = document.createElement("a");
    link.href = "cv/Kgatle K.W_Developer_cv.pdf";
    link.download = "Kgatle K.W_Developer_cv.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
})

document.getElementById('linkedin').addEventListener("click", function() {
    window.location.href = "http://www.linkedin.com/in/kwelekwele-kgatle"; 
});

document.getElementById('whatsApp').addEventListener("click", function() {
    window.location.href = "https://wa.me/0711210768", "_blank"; 
});

document.getElementById('gitHub').addEventListener("click", function() {
    window.location.href = "https://github.com/KweleKwele"; 
});

document.getElementById('email').addEventListener("click", function() {
    window.location.href = "mailto:williamkwelekwele@gmail.com"; 
});



// ---------------------projects linking to git hub-------------

document.getElementById('OnlineStoreProject').addEventListener("click", function() {
    window.location.href = "https://github.com/KweleKwele/-Full-Stack-Online-Shopping-Platform"; 
});

document.getElementById('faceBookClone').addEventListener("click", function() {
    window.location.href = "https://github.com/KweleKwele/Facebook_clone__html-css"; 
});

document.getElementById('personalFinaceTracker').addEventListener("click", function() {
    alert("Still Under Construction.....")
});