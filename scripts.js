$(document).ready(function () {

    $('#survey-form').validate({
        rules: {
            client_name: 'required',
            client_email: {
                required: true,
                email: true,
            },
            client_membership_status: 'required' 
        },
        messages: {
            client_name: 'This field is required!',
            client_email: 'Please enter a valid email!',
            client_membership_status: 'Please specify your memebership status!'
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});