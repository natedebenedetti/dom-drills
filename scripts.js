document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.createElement('div');
    div1.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');

    h1.className = "h1";
    h1.id = "one";

    h1.appendChild(h1Text);
    div1.appendChild(h1);
    document.body.appendChild(div1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');

    h2.className = "h2";

    h2.appendChild(h2Text);
    div1.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');

    h3.className = "h3";

    h3.appendChild(h3Text);
    div1.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');

    h4.className = "h4";

    h4.appendChild(h4Text);
    div1.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');

    h5.className = "h5";

    h5.appendChild(h5Text);
    div1.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');

    h6.className = "h6";

    h6.appendChild(h6Text);
    div1.appendChild(h6);

    let clrArray = []
        clrArray[0] = 'blue';
        clrArray[1] = 'red';
        clrArray[2] = 'green';
        clrArray[3] = 'purple';
        clrArray[4] = 'yelow';
        clrArray[5] = 'orange';
        clrArray[6] = 'olive';
        clrArray[7] = 'aqua';

    h1.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h1.style.color = clrArray[randomColor];
    }) 
    h2.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h2.style.color = clrArray[randomColor];
    })
    h3.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h3.style.color = clrArray[randomColor];
    })
    h4.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h4.style.color = clrArray[randomColor];
    })
    h5.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h5.style.color = clrArray[randomColor];
    })
    h6.addEventListener("dblclick", function () {  //need to figure out how to scale this to work for any header in the div...
        let randomColor = Math.floor(Math.random() * (clrArray.length));
        h6.style.color = clrArray[randomColor];
    })
})

