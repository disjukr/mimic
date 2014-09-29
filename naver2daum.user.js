// ==UserScript==
// @name       mimic-naver2daum
// @namespace  http://0xABCDEF.com/mimic
// @version    0.0.1
// @match      http://www.naver.com/
// @copyright  2014, JongChan Choi
// ==/UserScript==

document.querySelector('ul.naver_set').remove();

document.querySelector('.lnb').style.height = '135px';

document.querySelector('.lnb h1 img').src = 'http://icon.daumcdn.net/w/icon/1312/19/152729032.png';
document.querySelector('.lnb h1 img').width = '138';
document.querySelector('.lnb h1 img').height = '112';

document.querySelector('.gnb').style.backgroundColor = '#fff';

document.querySelector('#nav_hm').style.marginLeft = '48px';
document.querySelector('#nav_hm').style.webkitFilter = 'hue-rotate(130deg) brightness(90%) contrast(200%)';
document.querySelector('#nav_hm').style.borderLeft = '1px solid #c3c3c3';
document.querySelector('#nav_hm').style.borderRight = '1px solid #c3c3c3';
document.querySelector('#nav_hm2').remove();
document.querySelector('#nav_hm3').remove();
document.querySelector('#fms').remove();

document.querySelector('.green_window').style.borderColor = '#aaa';
document.querySelector('.green_window').style.backgroundColor = '#fafafa';
document.querySelector('.green_window').style.height = '37px';
document.querySelector('.green_window').style.borderWidth = '1px';
document.querySelector('.green_window').style.borderRadius = '2px';
document.querySelector('.green_window').style.borderTop = '2px groove';

document.querySelector('.sl_ico').remove();

document.body.querySelector('#query').parentElement.style.position = 'relative';
document.body.querySelector('#query').style.position = 'absolute';
document.body.querySelector('#query').style.top = '50%';
document.body.querySelector('#query').style.transform = 'translateY(-50%)';
document.body.querySelector('#query').style.left = '10px';
document.body.querySelector('#query').style.margin = '0';
document.body.querySelector('#query').style.backgroundColor = 'transparent';

document.querySelector('span.btn_arw.top a').style.padding = '8px 0';
document.querySelector('span.btn_arw.top a img').style.webkitFilter = 'hue-rotate(130deg) brightness(90%) contrast(200%)';

document.querySelector('#search_btn').style.webkitFilter = 'hue-rotate(130deg) brightness(90%) contrast(200%)';

document.querySelector('#s_menu').remove();
document.querySelector('.rankup').remove();

document.querySelector('#search_link .page').remove();

document.querySelector('.newscast_top').style.backgroundColor = '#fff';
document.querySelector('.cast_cnt').style.backgroundColor = '#fff';

document.querySelector('#minime').onload = function () {
    this.contentDocument.querySelector('.user_area').style.borderTop = '1px solid #DBE1EA';
    this.contentDocument.querySelector('.user_area').style.backgroundColor = '#DBE1EA';
    Array.prototype.forEach.call(this.contentDocument.querySelectorAll('#slide_cover li'), function (li) {
        li.style.backgroundColor = '#DBE1EA';
        li.style.borderTop = '1px solid #DBE1EA';
        li.style.borderColor = '#A5B2C0';
    });
    this.contentDocument.querySelector('.slide_btn .btn_next').style.backgroundColor = '#DBE1EA';
    this.contentDocument.querySelector('.user_info .mask').remove();
};
