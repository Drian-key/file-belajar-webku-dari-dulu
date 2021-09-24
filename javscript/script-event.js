// "Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM"
// kejadian bisa di lakukan oleh user (mouse event, keyboard event, dll)
// ataupun dilakukan secara otomatis oleh API (animasi selesai di jalankan, halaman selesai di load, dll)

// const p3 = document.querySelector('.p3');
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnap2;
// function ubahWarnap2(){
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnap3(){
//     p3.style.backgroundColor = 'lightblue';
// }

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const litext = document.createTextNode('item baru dari event listen');
//     liBaru.appendChild(litext);
//     ul.appendChild(liBaru);

// });

const p3 = document.querySelector(".p3");
// p3.onclick = function(){
//     p3.style.color = "red";
// }
// p3.onclick = function(){
//     p3.style.backgroundColor = "blue";
// }

p3.addEventListener('mouseenter', function(){
    p3.style.color = "red";
});
p3.addEventListener('mouseleave', function(){
    p3.style.color = "black";
});











