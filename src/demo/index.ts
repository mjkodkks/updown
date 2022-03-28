import Updown from "../lib";
document.querySelector("body").innerHTML = `
    <h1>
        DEMO OF UPDOWN.JS
    </h1>

    <ul class="updown">
        <li class="updown">123</li>
        <li class="updown">-123</li>
        <li class="updown">-5</li>
        <li class="updown">0</li>
        <li class="updown">0.1234568</li>
        <li class="updown">1,000</li>
        <li class="any-class-name-u-want">1010101</li>
    </ul> 
`;

const updown_1 = new Updown('.updown')
const updown_2 = new Updown('.any-class-name-u-want')

console.log("myLibraryInstance", updown_1, updown_2);