const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab,value)=> {
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {content.classList.remove('active')});
        all_content[value].classList.add('active');
        document.getElementById(imageName).src='paris.jpg';
    })
})
