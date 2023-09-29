// console.log("Lil Peep fan page");

const name = "Lil Peep";

age = 21;

// alert(name + "was" +" " + age);

const btn = document.createElement('button');
btn.innerText = 'Dont press this';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    alert('Dont click that!');
});
