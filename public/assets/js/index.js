console.log('loaded');
$(function() {
    $('#add-burger').on('click', function(event) {
        event.preventDefault();
        console.log('got here');
        let newBurg = {
            burger_name: $('#burg').val().trim()
        };
        console.log(newBurg);
        
        $.post('/api/burgers', newBurg)
        .then(function() {
            console.log('new burger');
            location.reload();
        });
    });
    
    $('.devour').on('click', function(event) {
        let id = $(this).data('id');
        
        let state = {
            devoured: true
        };
        
        $.put('/api/burgers/' + id, {
            data: state
        }).then(function() {
            console.log('changed devoured to', state);
            location.reload();
        });
    });
});
