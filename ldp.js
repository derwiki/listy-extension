  $('#full_name').val('Test Test');
  $('#email').val('test@test.com');
  $('#phone').val('216-368-3457');
  $('#message').val('Looking to move soon!');
  var tmd = new Date(Date.now() + 3600 * 24 * 1000 * 3);
  var dateString = [
     tmd.getMonth() < 10 ? '0'+(1+tmd.getMonth()).toString() : tmd.getMonth(),
     tmd.getDate(),
     tmd.getFullYear()].
   join('/');
  $('input.movein_date').val(dateString);
  $('.availability-form .submit').click();
