// tab栏切换
var mainData = [
    {
        img: "./ject/imgs/img1.png",
        url: "./ject/proj1/放大镜.html"
    },
    {
        img: "./ject/imgs/img2.png",
        url: "./ject/proj2/拼图.html"
    },
    {
        img: "./ject/imgs/img3.png",
        url: "./ject/proj3/音乐播放器.html"
    },
    {
        img: "./ject/imgs/img4.png",
        url: "./ject/proj4/日程表.html"
    },
    {
        img: "./ject/imgs/img5.png",
        url: "./ject/proj5/作业1-商品管理系统.html"
    },
    {
        img: "./ject/imgs/img6.png",
        url: "./ject/proj6/作业-收藏功能.html"
    },
    {
        img: "./ject/imgs/img7.png",
        url: "./ject/proj7/作业-存储列表.html"
    },
    {
        img: "./ject/imgs/img8.png",
        url: "./ject/proj8/index.html"
    },
]
var str = `
            作为一名极具创新精神和技术热情的全栈开发工程师，我在前端和后端技术领域均有出色的表现，
            致力于打造卓越的用户体验和高效的应用程序。我精通使用 H5、C3 和
            Js。我在前端开发中尤为擅长使用 React 和 Vue.js
            这些现代框架,能够构建复杂的单页面应用,并通过组件化开发提升代码的可维护性和复用性。
            不仅如此，我非常关注网站的性能优化，通过运用各类工具分析和解决性能瓶颈，
            确保用户享受到极速流畅的浏览体验。
            后端方面，我对 Node.js 有着深入的理解，能够利用其构建高效的服务器端应用程序。
            同时,我也掌握了数据库的使用，实现数据的存储与管理，确保后端服务高效且安全。
            我热衷于技术的探索与学习，紧跟行业前沿，不断提升自己的专业技能。
            我坚信，通过跨前后端的协同设计和开发，我能够为项目带来更大的价值。
             `
var nav_tab = document.querySelectorAll(".nav_tab");
var main_content = document.querySelector(".main-content")
main_content.innerHTML = `<div class="main_text">${str}</div>`
console.log(nav_tab);
nav_tab.forEach(e => {
    e.onclick = function (e) {
        if (e.target.textContent == "简介") {
            main_content.innerHTML = ""
            main_content.innerHTML = `<div class="main_text">${str}</div>`
        } else if (e.target.textContent == "作品集") {
            main_content.innerHTML = ""
            mainData.forEach(e => {
                var div = document.createElement("div")
                div.className = "main_tab";
                div.innerHTML = `<img class="main_tab_img" src="${e.img}" alt="">`
                div.onclick = function () {
                    window.location.href = e.url
                }
                main_content.appendChild(div)
            })
        } else if (e.target.textContent == "联系我") {
            main_content.innerHTML = ""
            main_content.innerHTML = `
            <form>
                <div class="main_contact">
                    <br>
                    <label for="name">姓名:</label>
                    <input type="text" id="name" name="name" required>
                    <br>
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" name="email" required>
                    <br>
                    <label for="message">留言:</label>
                    <textarea id="message" name="message" required></textarea>
                    <br>
                    <button type="submit">提交</button>
                </div>
            </form>
            `
        }
        console.log(e.target);
        nav_tab.forEach(e => {
            e.classList.remove("active")
        });
        e.target.classList.add("active")
    }
});

