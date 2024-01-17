'use strict';

window.onload = function(){ 
    document.getElementById('btn2').onclick = function() { 
        var x = document.getElementById('content2');
        var y = document.getElementById('content1');
        x.style.display = 'block';
        y.style.display = 'none';
    }  
};

function createC() {
    var title = document.getElementById('fname').value;

    var node = document.createElement('button');
    node.id = 'btn3';

    var titleElement = document.createElement('h2');
    titleElement.textContent = title;

    node.appendChild(titleElement);

    var clubContainer = document.getElementById('yourclub');
    clubContainer.appendChild(node).insertAdjacentElement("afterend", document.getElementById('btn2'));

    document.getElementById('fname').value = '';

    var x = document.getElementById('content2');
    var y = document.getElementById('content1');
    x.style.display = 'none';
    y.style.display = 'block';
    document.getElementById('btn3').onclick = function() { 
        window.location.href = "clubPage.html";
    }
}
