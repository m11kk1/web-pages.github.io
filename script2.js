function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    
    const file = fileInput.files[0];
    const li = document.createElement('li');
    const fileName = document.createTextNode(file.name);
    li.appendChild(fileName);
    fileList.appendChild(li);
  }
  