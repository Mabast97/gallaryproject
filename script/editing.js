$("#uploadButton").on("click",()=>{
    let postObj = {
        'title': $('#title').val(),
        'categoryId': $('#categoryID').val(),
        'description': $('#description').val(),
        'date': $('#date').val(),
        'url': $('#urlImage').val()
    }

    axios.post('http://localhost:3000/photos', postObj);
    });

    axios.get('http://localhost:3000/photos')
    .then(res => {
        res.data.map(response => {

            
            let arr = [];
        n = $('<tr>').append(`<td>${response.id}</td><td>${response.title}</td><td>${response.categoryId}</td><td>${response.description}</td>`);
        let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary mx-2');
        let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin mx-2');
        bDelete.on('click', () => {
        axios.delete('http://localhost:3000/photos/'+response.id);
        $("#get-button").click(); 
            });

            bEdit.on("click",()=>{
                let inputsArray = $("#create-form input")
                inputsArray[0].value = response.title;
                inputsArray[1].value = response.categoryId;
                inputsArray[2].value = response.description;
                inputsArray[3].value = response.date;
                inputsArray[4].value = response.url;
                let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                    response.title = inputsArray[0].value;
                    response.categoryId = inputsArray[1].value;
                    response.description = inputsArray[2].value;
                    response.date = inputsArray[3].value;
                    response.url = inputsArray[4].value;

                    axios.put('http://localhost:3000/photos/'+response.id, response);
                    saveButton.remove();
                    $("input,textarea").val("")
                    });
                    $('#create-form').append(saveButton);
            });
            n.append($('<td>').append([bEdit, bDelete])); 
             $('tbody').append(n);
        });
    })
