$(document).ready(function() {

    var contactList = [
        {
            'id': 1,
            'image': 'img/person-placeholder.jpg',
            'name': 'Alvin',
            'lastName': 'Eclair',
            'email': 'a.eclair@gmail.com',
            'phone': '123 123 123'
        },
        {
            'id': 2,
            'image': 'img/person-placeholder.jpg',
            'name': 'Blom',
            'lastName': 'Plum',
            'email': 'b.plum@gmail.com',
            'phone': '122 222 333'
        },
        {
            'id': 3,
            'image': 'img/person-placeholder.jpg',
            'name': 'Calvin',
            'lastName': 'Drop',
            'email': 'c.drop@gmail.com',
            'phone': '133 333 444'
        },
        {
            'id': 4,
            'image': 'img/person-placeholder.jpg',
            'name': 'Darvin',
            'lastName': 'Drop',
            'email': 'c.drop@gmail.com',
            'phone': '133 333 444'
        },
        {
            'id': 5,
            'image': 'img/person-placeholder.jpg',
            'name': 'Malvin',
            'lastName': 'Drop',
            'email': 'c.drop@gmail.com',
            'phone': '133 333 444'
        }
    ];


    displayData();

    // Add contact event
    $('#add-contact').on('click', function(e) {
        modalInputsValidation();
    });

    // Clear inputs on modal 'Cancel' click
    $('#remove-contact').on('click', function() {
        clearModalInputs();
    });

    // Delete contact function init
    deleteContact();


    // Display data from array
    function displayData() {
        for (var i = 0; i < contactList.length; i++) {

            var emailData = contactList[i].email.substring(contactList[i].email.indexOf('@'), contactList[i].email.indexOf('.com'));
            var emailDataDone = emailData.substring(1).toLowerCase();

            $('tbody').append('<tr class="row-wrapper-'+ i +'"></tr>');
            var row$ = $('.row-wrapper-' + i);
            row$.append('<td class="idNumber">' + contactList[i].id +'</td>');
            row$.append('<td><img class="circle responsive-img" src="' + contactList[i].image + '"/></td>');
            row$.append('<td class="name" data-name="' + contactList[i].name.toLowerCase() +'">' + contactList[i].name +'</td>');
            row$.append('<td class="lastName" data-lastName="' + contactList[i].lastName.toLowerCase() +'">' + contactList[i].lastName +'</td>');
            row$.append('<td class="email" data-email="' + emailDataDone + '">' + contactList[i].email +'</td>');
            row$.append('<td data-field="phone">' + contactList[i].phone +'</td>');
            row$.append('<td class="actions right-align" data-field="action"><a href="#!" type="submit" class="waves-effect btn red deleteContact">Delete</a></td>');
        }
    }

    // Display new contact from array

    function displayNewContact() {

        var newContact = contactList.length - 1;
        var emailData = contactList[newContact].email.substring(contactList[newContact].email.indexOf('@'), contactList[newContact].email.indexOf('.com'));
        var emailDataDone = emailData.substring(1).toLowerCase();

        $('tbody').append('<tr class="row-wrapper-'+ newContact +'"></tr>');
        var row$ = $('.row-wrapper-' + newContact);
        row$.append('<td class="idNumber">' + contactList[newContact].id +'</td>');
        row$.append('<td><img class="circle responsive-img" src="' + contactList[newContact].image + '"/></td>');
        row$.append('<td class="name" data-name="' + contactList[newContact].name.toLowerCase() +'">' + contactList[newContact].name +'</td>');
        row$.append('<td class="lastName" data-lastName="' + contactList[newContact].lastName.toLowerCase() +'">' + contactList[newContact].lastName +'</td>');
        row$.append('<td class="email" data-email="' + emailDataDone + '">' + contactList[newContact].email +'</td>');
        row$.append('<td data-field="phone">' + contactList[newContact].phone +'</td>');
        row$.append('<td class="actions right-align" data-field="action"><a href="#!" class="waves-effect btn red deleteContact">Delete</a></td>');
    }


    // Add new contact to contact list
    function addContact() {
        var userName = $('#first_name').val();
        var userLastName = $('#last_name').val();
        var userEmail = $('#user_email').val();
        var userPhone = $('#phone_number').val();
        var userImage = 'img/' + $('#file_path').val();
        var newPerson;

        console.log("Name: " + userName);
        console.log("Last name: " + userLastName);
        console.log("Email: " + userEmail);
        console.log("Phone: " + userPhone);
        console.log("Image: " + userImage);

        function newContact(userImage, userName, userLastName, userEmail, userPhone){
            this.id = contactList.length + 1,
            this.image = userImage,
            this.name = userName,
            this.lastName = userLastName,
            this.email = userEmail,
            this.phone = userPhone
        }

        newPerson = new newContact(userImage, userName, userLastName, userEmail, userPhone);
        contactList.push(newPerson);

    }


    // Modal inputs validation
    function modalInputsValidation() {
        var userName = $('#first_name').val();
        var userLastName = $('#last_name').val();
        var userEmail = $('#user_email').val();
        var userPhone = $('#phone_number').val();

        // Regexp
        var nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
        var lastNameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneRegex = /^-?\d*\.?\d+$/;

        // Valid flags
        var nameValid;
        var lastNameValid;
        var emailValid;
        var phoneValid;

        // User name validation
        if (!userName.match(nameRegex)) {
            $('#first_name').addClass('invalid');
            nameValid = false;
        }
        else {
            $('#first_name').addClass('valid');
            nameValid = true;
        }

        // Last name validation
        if (!userLastName.match(lastNameRegex)) {
                $('#last_name').addClass('invalid');
                lastNameValid = false;
        }
        else {
            $('#last_name').addClass('valid');
            lastNameValid = true;
        }

        // Email validation
        if (!userEmail.match(emailRegex)) {
            $('#user_email').addClass('invalid');
            emailValid = false;
        }
        else {
            $('#user_email').addClass('valid');
            emailValid = true;
        }

        // Phone validation
        if (!userPhone.match(phoneRegex)) {
            $('#phone_number').addClass('invalid');
            phoneValid = false;
        }
        else {
            $('#phone_number').addClass('valid');
            phoneValid = true;
        }

        // Add contact if all true
        if (nameValid && lastNameValid && emailValid && phoneValid) {
            addContact();
            displayNewContact();
            clearModalInputs();
            deleteContact();
        }


    }

    // Clear inputs
    function clearModalInputs() {
        $('#addContactForm')[0].reset();
    }


    // Delete contact
    function deleteContact() {
        $('.deleteContact').on('click', function(){
            var idToDelete = $(this).parent().parent().find('.idNumber').text() - 1;
            contactList.splice(parseInt(idToDelete), 1);
            $(this).parent().parent().remove();

        });
    }


});

