// Display a character of your choice on the screen to represent your pet
const images=["10yearl.png","babyl.png","lion10jpng.png"];
const chosenImage =images[Math.floor(Math.random()* images.length)];

const yjImage = document.createElement("img");

yjImage.src=`img/${chosenImage}`;
console.log(yjImage);
document.body.appendChild(yjImage);


document.body.style.backgroundColor='brown'
document.body.style.color='white'

// Picture is randomly changing. I remember that i have learn on last year.
// (Nomad Coder -Youtube)



