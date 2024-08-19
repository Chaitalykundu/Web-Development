function changeColor(){

    let color = ['red','black','green','gray','yellow'];
    let res = document.getElementById('demo');

    let pickedColor = color[Math.floor(Math.random() * color.length)];
    // let pickedColor = color[(Math.random() * color.length) | 0];
    res.style.backgroundColor = pickedColor;

    if(color=='black')
        res.style.color = 'white';
    
    
}