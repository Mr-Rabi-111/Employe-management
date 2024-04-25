$(document).ready(function(){
    $('#loginForm').submit(function(e){
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
 
        $.post('backend/login.php', {username: username, password: password}, function(response){
            if(response === 'valid'){
                
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid login details');
            }
        });
    });
});
