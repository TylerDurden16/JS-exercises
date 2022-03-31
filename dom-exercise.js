        const para = document.createElement('p');
        const h3 = document.createElement('h3');
        const newDiv = document.createElement('div');
        const div = document.getElementById('container');
        const btn = document.querySelector('#btn');
        const bt2 = document.querySelector('#btn2');

        para.setAttribute('style', 'color: red');
        para.textContent = "Hey I'm red!";
        div.appendChild(para);
        h3.setAttribute('style', 'color: blue');
        h3.textContent = "I'm a blue h3!";
        div.appendChild(h3);
        newDiv.style.cssText = 'border-style: dotted; border-color: black; background-color: pink';
        const h1 = document.createElement('h1');
        h1.textContent = "I'm in a div";
        newDiv.appendChild(h1);
        const para2 =document.createElement('p');
        para2.textContent = "ME TOO!";
        newDiv.appendChild(para2);
        div.appendChild(newDiv);
        btn.onclick = () => alert("Hello Wrold");
        btn2.addEventListener('click', function(e) {
            e.target.style.background = "blue";
        });