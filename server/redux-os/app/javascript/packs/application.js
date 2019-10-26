// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// alert("")
// alert('')




Rails = require("@rails/ujs")
Rails.start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// require("chartkick")
// require("chart.js")
// require("chartkick")
require("chartkick").use(require("highcharts"))



document.addEventListener("turbolinks:load", function(){
    $('[data-toggle="popover"]').popover();

    var entityValueMarking = document.getElementById('entity-value-marking');

    document.querySelectorAll('form[action="/wit_ai_parse_model_examples"]').forEach(function(form) {
        form.addEventListener('ajax:before', function(e) {
            if(form.dataset.isComplete !== 'true') {
                e.preventDefault();
                entityValueMarking.style.display = 'block';

                alert('Pls select the text that should be the extracted value for this property.');

                let onFinalSelectionChange = function() {
                    let selection = document.getSelection();
                    let isConfirmed = confirm('Confirm this property value? ' + selection);
                    if(!isConfirmed) { return; }
                    form.querySelector('input[name="wit_ai_parse_model_example[entity_value]"]').value = selection;
                    form.querySelector('input[name="wit_ai_parse_model_example[parsable_resource_entity_value_start_index]"]').value = selection.baseNode.parentElement.dataset.index;
                    form.querySelector('input[name="wit_ai_parse_model_example[parsable_resource_entity_value_end_index]"]').value = selection.extentNode.parentElement.dataset.index;

                    form.dataset.isComplete = 'true';

                    Rails.fire(form, 'submit');
                }
                
                let lastTimeStamp = 0;
                document.addEventListener('selectionchange', (e) => {

                    setTimeout(function() {
                        if(e.timeStamp === lastTimeStamp) {
                            onFinalSelectionChange()
                        } 
                    }, 1000)
        
                    
                    lastTimeStamp = e.timeStamp;
                });
            }
        })
    });
});



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true

// // import and load opal ruby files
// import init_app from 'opal_loader.rb';
// init_app();
// Opal.load('opal_loader');


require("trix")
require("@rails/actiontext")