function tabClass(obj) {
  $(obj).siblings().removeClass();
  $(obj).addClass('active');
}

$(function () {
  var tabSearch = $('.tab-fl ul li');
  tabSearch.each(function (index, elemt) {
    elemt.addEventListener('click', function (event) {
      var this_modelid = parseInt($(this).attr('data-modelid'));
      $('input[name=modelid]').val(this_modelid);

      switch (this_modelid) {
        case 6:
          $('.input-search h3').text('涓汉璇佷功鏌ヨ灞曠ず');
          $('.input-search input[type=text]').attr('placeholder', '璇疯緭鍏ュ鍚�/韬唤璇佸彿');
          break;
        case 7:
          $('.input-search h3').text('浼佷笟璧勮川鏌ヨ灞曠ず');
          $('.input-search input[type=text]').attr('placeholder', '璇疯緭鍏ュ叕鍙稿悕绉�/璇佷功缂栧彿杩涜鏌ヨ');
          break;
        case 8:
          $('.input-search h3').text('浼氬憳淇℃伅鏌ヨ灞曠ず');
          $('.input-search input[type=text]').attr('placeholder', '姹曞ご甯備腑寤哄噣鍖栫鎶€鏈夐檺鍏徃');
          break;
      }
    })
  })
})