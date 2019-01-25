document.addEventListener("DOMContentLoaded", function () { //waits for entire document to load before running javascript.. required when script is placed in header of index.html.
    let div1 = document.createElement('div');
    div1.className = "header-container";

    // start of code creating elements h1 - h6 and adding even listeners to them to change their color upon double click.
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');

    h1.className = "h1 noSelect"; // added noSelect class to each h element to be able to disable the highlighting of the text on the html page every time they are double clicked.

    h1.appendChild(h1Text);
    div1.appendChild(h1);
    document.body.appendChild(div1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');

    h2.className = "h2 noSelect";

    h2.appendChild(h2Text);
    div1.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');

    h3.className = "h3 noSelect";

    h3.appendChild(h3Text);
    div1.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');

    h4.className = "h4 noSelect";

    h4.appendChild(h4Text);
    div1.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');

    h5.className = "h5 noSelect";

    h5.appendChild(h5Text);
    div1.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');

    h6.className = "h6 noSelect";

    h6.appendChild(h6Text);
    div1.appendChild(h6);

    let clrArray = ['blue', 'red', 'green', 'purple', 'yellow', 'orange', 'olive', 'aqua'];

    h1.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h1.style.color = clrArray[randomColor];
    })
    h2.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h2.style.color = clrArray[randomColor];
    })
    h3.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h3.style.color = clrArray[randomColor];
    })
    h4.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h4.style.color = clrArray[randomColor];
    })
    h5.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h5.style.color = clrArray[randomColor];
    })
    h6.addEventListener("dblclick", function () {
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h6.style.color = clrArray[randomColor];
    }) // end of color changing h1 -  h6 elements.

    button1 = document.getElementsByClassName('btn')[0]; //targets button that I created in the index.html file by className.
    let number = 1;
    listPresent = false;

    button1.addEventListener('click', function () { //listens for click on button with class name .btn and add a new list item every time incrementing number by 1.
        let list = document.createElement('li');
        let liText = document.createTextNode("This is list item " + number);
        list.appendChild(liText);
        document.body.appendChild(list);
        number++;
        
        list.addEventListener('click', function () { //event listener nested within above event listener to change color of list items text when clicked once.
            let randomColor = Math.floor(Math.random() * (clrArray.length));
            list.style.color = clrArray[randomColor];
        })
        list.addEventListener('dblclick', function() { //another nested event listener to remove child list item when double clicked.
            document.body.removeChild(list);
        })
    })
    

})

