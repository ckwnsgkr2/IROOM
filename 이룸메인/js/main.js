// main.js
$(function(){
  
  // 비주얼 버튼 클릭
  $('#visual_pager > a').click(function(){
    // 클래스 제거(상태 초기화)
    $('#visual_pager > a').removeClass('selected');

    // 클래스 추가
    $(this).addClass('selected');

  });

});