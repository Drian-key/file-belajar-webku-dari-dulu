// DOM Selection
// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'Drian p';

// document.getElementsByTagName() -> HTMLcolection
const p = document.getElementsByTagName('p');
const alink = document.getElementsByTagName('a');
alink[0].style.backgroundColor = 'green';
alink[0].innerHTML = "instagram di ubah dari js";
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'red';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// HTMLcolection
const p1 = document.getElementsByClassName('p1')[0];
const liitem = document.getElementsByClassName('liitem');
p1.innerHTML = 'Ini diubah dari js';
for (let i = 0; i < liitem.length; i++) {
    liitem[i].style.backgroundColor = '#eaeaea';
}



// document.querySelector() -> element
const p4 = document.querySelector('#b p');
const li2 = document.querySelector('#b ul li:nth-child(2)')
p4.style.backgroundColor = 'red';
p4.style.fontSize = '30px';
li2.style.backgroundColor = 'green';

// document.querySelectorAll() -> node list
const allP = document.querySelectorAll('p');
for (let i = 0; i < allP.length; i++) {
    allP[i].style.backgroundColor = 'lightblue';
}


// manipulasi dengan innerhtml
const judul = document.getElementById('judul');
const sectionA = document.querySelector('#a');
judul.innerHTML = '<i>drian</i>';
sectionA.innerHTML = 'hello';

// merubah css
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';

// manipulasi atribut
const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'sandhika');
const a = document.querySelector('section#a a')


const p2 = document.querySelector('.p2');
p2.classList.add('nama kelas');
p2.classList.contains('nama kelas');
p2.classList.item(ik);

// ///////////////////////////////////////
// DOM MANIPULATION
// //buat elemen baru 
const pBaru = document.createElement('p');
const textBaru = document.createTextNode('paragraf baru');
//simpan tulisan ke paragraf
pBaru.appendChild(textBaru);
// simpan p aru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// ///////////////////////////
const libaru = document.createElement('li');
const litext = document.createTextNode('item baru');
libaru.appendChild(litext);
libaru.style.backgroundColor = 'skyblue';

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(libaru, li2);

const aBaru = document.createElement('a');
const textA = document.createTextNode('ig saya');
aBaru.appendChild(textA);
aBaru.style.backgroundColor = 'skyblue';
aBaru.setAttribute('href', 'https://instagram.com');
const SectionPertama = document.querySelector('section#a .link');
const aPertama = SectionPertama.querySelector('a:nth-child(2)');
SectionPertama.insertBefore(aBaru, aPertama);

const linkA = document.getElementsByTagName('a')[0];
SectionPertama.removeChild(linkA);

const SectionB = document.getElementById('b');
const p4 = SectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const texth2 = document.createTextNode('Judu baru');
h2Baru.appendChild(texth2);
h2Baru.style.backgroundColor = 'skyblue';
SectionB.replaceChild(h2Baru, p4);










