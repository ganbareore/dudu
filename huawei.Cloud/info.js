// var index = 0;
// var box = my$("box");
// var inner = box.children[0];
// var imgWidth = inner.offsetWidth;
// var ulObj = inner.children[0];
// var list = ulObj.children;
// var olObj = inner.children[1];
// var arr = my$("arr");

// for(var i = 0; i <= list.length; i++){
//     var liObjs = document.createElement("li");
//     olObj.appendChild(liObjs);
//     liObjs.innerHTML = (i + 1);
//     //在ol中每个li中增加自定义属性，添加索引值
//     liObjs.setAttribute("index",i);
//     //注册鼠标进入事件
//     liObjs.onmouseover = function () {
//         //先干掉所有颜色背景
//         for (var j = 0; j <= olObj.children,length; j++){
//             olObj.children[j].removeAttribute("class");
//     }
//     //设置当前鼠标进来样式
//     this.classname = "current";
//     //获取ol中li的索引值
//     index = this.getAttribute("index");
//     //移动ul
//     animate(ulObj, -index * imgWidth);//移动动画函数
// }
// //设置第一个ol中的li的背景颜色
// olObj.children[0].classname = "current";

// //克隆ol中的第一个li放到最后一个
// ulObj.appendChild(ulObj.children[0].cloneNode(true));
// //点击右边按钮
// my$("right").onclick=clickHandle;
// function clickHandle() {
//   if (index==ulObj.children.length-1){
//     ulObj.style.left=0+"px";
//     index=0;
//   }
//   index++;
//   animate(ulObj,-index*imgWidth);
//   if (index==list.length-1){
//     olObj.children[0].className="current";
//     olObj.children[olObj.children.length-1].className="";
//   }else {
//     for (var i=0;i<olObj.children.length;i++){
//       olObj.children[i].className="";
//     }
//     olObj.children[index].className="current";
//   }
// };
// //点击左边按钮
// my$("left").onclick=function () {
//   if (index==0){
//     index=list.length-1;
//     ulObj.style.left=-index*imgWidth+"px";
//   }
//   index--;
//   animate(ulObj,-index*imgWidth);
//   for (var i=0;i<olObj.children.length;i++){
//     olObj.children[i].className="";
//   }
//   olObj.children[index].className="current";
// };









// // var i = 0 ;
// // var timer;
 
// // $(document).ready(function(){
// //   //用jquery方法设置第一张图片显示，其余隐藏
// //   $('.ig').eq(0).show().siblings('.ig').hide();
   
// //   //调用showTime()函数（轮播函数）
// //   showTime();
   
// //   //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
// //   $('.tab').hover(function(){
// //     //获取当前i的值，并显示，同时还要清除定时器
// //     i = $(this).index();
// //     Show();
// //     clearInterval(timer);
// //   },function(){
// //     //
// //     showTime();
// //   });
   
// //   //鼠标点击左侧的箭头
// //   $('.btn1').click(function(){
// //     clearInterval(timer);
// //     if(i == 0){
// //       i = 5;//注意此时i的值
// //     }
// //     i--;
// //     Show();
// //     showTime();
// //   });
   
// //   //鼠标点击右侧的箭头
// //   $('.btn2').click(function(){
// //     clearInterval(timer);
// //     if(i == 4){
// //       i = -1;//注意此时i的值
// //     }
// //     i++;
// //     Show();
// //     showTime();
// //   });
   
// // });
 
 
// // //创建一个showTime函数
// // function showTime(){
// //   //定时器
// //   timer = setInterval(function(){
// //     //调用一个Show()函数
// //     Show();
// //     i++;
// //     //当图片是最后一张的后面时，设置图片为第一张
// //     if(i==5){
// //       i=0;
// //     }
// //   },2000);
// // }
 
 
// // //创建一个Show函数
// // function Show(){
// //   //在这里可以用其他jquery的动画
// //   $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
   
// //   //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
// //   $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
   
// //   /*
// //    * css中添加的代码：
// //    * .bg{ background-color: #f00; }
// //    * */
// // }
