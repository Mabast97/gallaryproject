/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$("#uploadButton").on("click",()=>{
    let postObj = {
        'title': $('input#title').val(),
        'categoryId': parseInt($('#categoryID').val()),
        'description': $('input#description').val(),
        'date': $('input#date').val(),
        'url': $('#urlImage').val()
    }
   axios.post('http://localhost:3000/photos', postObj);
    });



// // ---------------------------------
//     axios.get('http://localhost:3000/photos')
//     .then(res => {
//         res.data.map(response => {

            
//             let arr = [];
//         let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary mx-2');
//         let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin mx-2');
//         bDelete.on('click', () => {
//         axios.delete('http://localhost:3000/photos/'+response.id);
//         $("#get-button").click(); 
//             });

//             bEdit.on("click",()=>{
//                 let inputsArray = $("#create-form input")
//                 inputsArray[0].value = response.title;
//                 inputsArray[1].value = response.categoryId;
//                 inputsArray[2].value = response.description;
//                 inputsArray[3].value = response.date;
//                 inputsArray[4].value = response.url;
//                 let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
//                     response.title = inputsArray[0].value;
//                     response.categoryId = inputsArray[1].value;
//                     response.description = inputsArray[2].value;
//                     response.date = inputsArray[3].value;
//                     response.url = inputsArray[4].value;

//                     axios.put('http://localhost:3000/photos/'+response.id, response);
//                     saveButton.remove();
//                     $("input").val("")
//                     });
//                     $('#create-form').append(saveButton);
//             });



//             $('#allImages').append(`<div class="card-deck">
//             <div class="card" id="row-${i}">
//               <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
//               <div class="card-body">
//                 <h5 class="card-title">${response[i].title}</h5>
//                 <p class="card-text">${response[i].description}</p>
//               </div>
//             </div>
//             </div>`).find(`#row-${i}`).append([bEdit, bDelete]);
//         });
//     })
// // ------------------------------------











$.ajax({
    url: 'http://localhost:3000/photos',
    method: 'GET',
    contentType: 'application/json',
    success: function(response)
    {        
        for (let i=0; i<response.length; i++)
        {
            let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary');
            let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin');
            bDelete.on('click', () => {
                axios.delete('http://localhost:3000/photos/'+response[i].id);
            });
            
            bEdit.on("click",()=>{
                let inputsArray = $("#create-form input")
                inputsArray[0].value = response[i].title;
                inputsArray[1].value = response[i].categoryId;
                inputsArray[2].value = response[i].description;
                inputsArray[3].value = response[i].date;
                inputsArray[4].value = response[i].url;
                let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                    response[i].title = inputsArray[0].value;
                    response[i].categoryId = inputsArray[1].value;
                    response[i].description = inputsArray[2].value;
                    response[i].date = inputsArray[3].value;
                    response[i].url = inputsArray[4].value;
    
                    axios.put('http://localhost:3000/photos/'+response[i].id, response[i]);
                    saveButton.remove();
                    $("input").val("")
                    });  
                    $('#create-form').append(saveButton);
            });



            $('#allImages').append(`<div class="card-deck">
            <div class="card" id="row-${i}">
              <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${response[i].title}</h5>
                <p class="card-text">${response[i].description}</p>
              </div>
            </div>
            </div>`).find(`#row-${i}`).append([bEdit, bDelete]);
        }        
    } 
});

function nature(){
    $('#allImages').html('');
    $.ajax({
        url: 'http://localhost:3000/photos',
        method: 'GET',
        contentType: 'application/json',
        success: function(response)
        {     
            for(let i=0; i<response.length; i++)
            {
                if (response[i].categoryId === 1)
                {
                    console.log('yes');
                    let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary');
            let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin');
            bDelete.on('click', () => {
                axios.delete('http://localhost:3000/photos/'+response[i].id);
            });
            bEdit.on("click",()=>{
                let inputsArray = $("#create-form input")
                inputsArray[0].value = response[i].title;
                inputsArray[1].value = response[i].categoryId;
                inputsArray[2].value = response[i].description;
                inputsArray[3].value = response[i].date;
                inputsArray[4].value = response[i].url;
                let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                    response[i].title = inputsArray[0].value;
                    response[i].categoryId = inputsArray[1].value;
                    response[i].description = inputsArray[2].value;
                    response[i].date = inputsArray[3].value;
                    response[i].url = inputsArray[4].value;
    
                    axios.put('http://localhost:3000/photos/'+response[i].id, response[i]);
                    saveButton.remove();
                    $("input").val("")
                    }); 
                });

                $('#allImages').append(`<div class="card-deck">
                <div class="card" id="row-${i}">
                  <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${response[i].title}</h5>
                    <p class="card-text">${response[i].description}</p>
                  </div>
                </div>
                </div>`).find(`#row-${i}`).append([bEdit, bDelete]);

                }
                else{
                    console.log("none");
                }
            }   
        }
    });
}

function study(){
    $('#allImages').html('');
    $.ajax({
        url: 'http://localhost:3000/photos',
        method: 'GET',
        contentType: 'application/json',
        success: function(response)
        {     
            for(let i=0; i<response.length; i++)
            {
                if (response[i].categoryId === 3)
                {
                    console.log('yes');
                    let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary');
            let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin');
            bDelete.on('click', () => {
                axios.delete('http://localhost:3000/photos/'+response[i].id);
            });
            bEdit.on("click",()=>{
                let inputsArray = $("#create-form input")
                inputsArray[0].value = response[i].title;
                inputsArray[1].value = response[i].categoryId;
                inputsArray[2].value = response[i].description;
                inputsArray[3].value = response[i].date;
                inputsArray[4].value = response[i].url;
                let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                    response[i].title = inputsArray[0].value;
                    response[i].categoryId = inputsArray[1].value;
                    response[i].description = inputsArray[2].value;
                    response[i].date = inputsArray[3].value;
                    response[i].url = inputsArray[4].value;
    
                    axios.put('http://localhost:3000/photos/'+response[i].id, response[i]);
                    saveButton.remove();
                    $("input").val("")
                    }); 
                });

                $('#allImages').append(`<div class="card-deck">
                <div class="card" id="row-${i}">
                  <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${response[i].title}</h5>
                    <p class="card-text">${response[i].description}</p>
                  </div>
                </div>
                </div>`).find(`#row-${i}`).append([bEdit, bDelete]);

                }
                else{
                    console.log("none");
                }
            }   
        }
    });
}

function flower(){
    $('#allImages').html('');
    $.ajax({
        url: 'http://localhost:3000/photos',
        method: 'GET',
        contentType: 'application/json',
        success: function(response)
        {     
            for(let i=0; i<response.length; i++)
            {
                if (response[i].categoryId === 4)
                {
                    console.log('yes');
                    let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary');
            let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin');
            bDelete.on('click', () => {
                axios.delete('http://localhost:3000/photos/'+response[i].id);
            });
            bEdit.on("click",()=>{
                let inputsArray = $("#create-form input")
                inputsArray[0].value = response[i].title;
                inputsArray[1].value = response[i].categoryId;
                inputsArray[2].value = response[i].description;
                inputsArray[3].value = response[i].date;
                inputsArray[4].value = response[i].url;
                let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                    response[i].title = inputsArray[0].value;
                    response[i].categoryId = inputsArray[1].value;
                    response[i].description = inputsArray[2].value;
                    response[i].date = inputsArray[3].value;
                    response[i].url = inputsArray[4].value;
    
                    axios.put('http://localhost:3000/photos/'+response[i].id, response[i]);
                    saveButton.remove();
                    $("input").val("")
                    }); 
                });

                $('#allImages').append(`<div class="card-deck">
                <div class="card" id="row-${i}">
                  <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${response[i].title}</h5>
                    <p class="card-text">${response[i].description}</p>
                  </div>
                </div>
                </div>`).find(`#row-${i}`).append([bEdit, bDelete]);

                }
                else{
                    console.log("none");
                }
            }   
        }
    });
}

$("#all").on("click",() => {
    console.log('alll')
    $('#allImages').html('');
    console.log('hi');
    $.ajax({
        url: 'http://localhost:3000/photos',
        method: 'GET',
        contentType: 'application/json',
        success: function(response)
        {        
            for (let i=0; i<response.length; i++)
            {
                let bEdit = $('<button>').html('Edit').addClass('btn btn-secondary btn-outline-primary');
                let bDelete = $('<button>').html('Delete').addClass('btn btn-secondary btn-danger margin');
                bDelete.on('click', () => {
                    axios.delete('http://localhost:3000/photos/'+response[i].id);
                });
                
                bEdit.on("click",()=>{
                    let inputsArray = $("#create-form input")
                    inputsArray[0].value = response[i].title;
                    inputsArray[1].value = response[i].categoryId;
                    inputsArray[2].value = response[i].description;
                    inputsArray[3].value = response[i].date;
                    inputsArray[4].value = response[i].url;
                    let saveButton = $("<button>").html("SAVE").attr("type","button").addClass("btn btn-outline-primary btn-block btn-lg size").on('click', () => {
                        response[i].title = inputsArray[0].value;
                        response[i].categoryId = inputsArray[1].value;
                        response[i].description = inputsArray[2].value;
                        response[i].date = inputsArray[3].value;
                        response[i].url = inputsArray[4].value;
                        
                        axios.put('http://localhost:3000/photos/'+response[i].id, response[i]);
                        saveButton.remove();
                        $("input").val("")
                    });  
                });
                
                
                
                $('#allImages').append(`<div class="card-deck">
                <div class="card" id="row-${i}">
                <img class="card-img-top" src="${response[i].url}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${response[i].title}</h5>
                <p class="card-text">${response[i].description}</p>
                </div>
                </div>
                </div>`).find(`#row-${i}`).append([bEdit, bDelete]);
            }        
        } 
    });
});
