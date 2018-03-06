$(function() {
    $('.add-burger').on('submit', function(event) {
        event.preventDefault();

        let newBurg = {
            burger_name: $('#burg').val().trim()
        };
        console.log(newBurg);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurg
        }).then(function() {
            console.log('new burger');
            location.reload();
        });
    });

    $('.devour').on('click', function(event) {
        let id = $(this).data('id');

        let state = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: state
        }).then(function() {
            console.log('changed devoured to', state);
            location.reload();
        });
    });
});