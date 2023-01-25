$('#addContect').click(function(){
    var nameVal=$('#name').val();
    var temp='<div class="userList"><span class="material-symbols-outlined">close</span><p>'+nameVal+'</p><p>訂單處理中</p></div>';

    if(nameVal==''){
        alert('請輸入訂購人電話');
    }   
    else{
        $('.appenList').append(temp);
    }
})

$('.material-symbols-outlined').click(function(){
    $(this).parents('.userList').html('');
})

$(document).on('click','.material-symbols-outlined',function(){
    $(this).parents('.userList').html('');
})