var input = document.getElementById('cFile');
var infoArea = document.getElementById('file-upload-filename');

input.addEventListener('change', showFileName);

function showFileName(event) {

  // the change event gives us the input it occurred in 
  var input = event.srcElement;
  var tmp = '';

  if ('files' in input) {
    for (var i = 0; i < input.files.length; i++) {
      // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
      var fileName = input.files[i].name;
      tmp += fileName + ' <i class="far fa-check-circle"></i><br>';
    }
  }

  // use fileName however fits your app best, i.e. add it into a div
  infoArea.innerHTML = tmp;

}