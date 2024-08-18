
const allProjects = {


    "Project1": { "Title":"Personal Website" ,"ImageURL":"static/pyramids.jpeg", "Text":"Web Design/Development" , "Tech":"JS|HTML|CSS"},
    "Project2": { "Title":"AED Plus" ,"ImageURL":"static/aed.jpeg", "Text":"Software Development" , "Tech":"C++|Qt"},
    "Project3": { "Title":"Project Dory" ,"ImageURL":"static/dory.jpeg", "Text":"Artificial Intelligence" , "Tech":"Python"},

    "Project4": { "Title":"Movie Database" ,"ImageURL":"static/movieDB.png", "Text":"Web Design/Development" , "Tech":"JS|HTML|CSS\n|Node|Express|MongoDB|APIs"},
    "Project5": { "Title":"P5" ,"ImageURL":"", "Text":"COMING SOON" , "Tech":""},
    "Project6": { "Title":"P6" ,"ImageURL":"", "Text":"COMING SOON" , "Tech":""},
                
}

const allInfos = {


    "Info1": { "Title":"Web Development", "Text":"I am skilled in JS, HTML, and CSS. My journey in the web realm extends to Node.js, Express.js, MongoDB, and APIs. I thrive on creating seamless and dynamic online experiences."},
    "Info2": { "Title":"Software Development" , "Text":"I have a strong foundation in software development principles such as object-oriented programming, data structures & algorithms. Specializing in multiple programming languages like C/C++, Python, and Java" },
    "Info3": { "Title":"Extras" ,"Text":"Data Structures & Algorithms\nArtificial Intelligence\nOperating Systems\n"},
                
}

//walpaper randomizer
window.onload = wallpaperRandomizer;


let wallpapers = [
    { url: 'static/pxfuel1.jpg' },
    { url: 'static/pxfuel2.jpg' },
    //{ url: '' },
    { url: 'static/wallpaper4.jpg' },
];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function wallpaperRandomizer() {
    let selectedWallpaper = getRandomElement(wallpapers);
    //document.body.style.backgroundImage = `url(${selectedWallpaper.url})`;
    document.getElementById('home').style.backgroundImage = `url(${selectedWallpaper.url})`;
    selectedWallpaper = getRandomElement(wallpapers);
    document.getElementById('about').style.backgroundColor = `#1e1e1e`;
    selectedWallpaper = getRandomElement(wallpapers);
    document.getElementById('services').style.backgroundColor = `#1e1e1e`;
    selectedWallpaper = getRandomElement(wallpapers);
    document.getElementById('portfolio').style.backgroundColor = `#1e1e1e`;
    selectedWallpaper = getRandomElement(wallpapers);
    document.getElementById('contact').style.backgroundColor = `#1e1e1e`;
}


//
function clear(){
    let content = document.getElementById('content')
    content.innerHTML = ''
    
}

function showHome() {
    clear();


}

function showAbout() {
    clear();
    

}

function showSkills(){

    let projects = [
      { id: 'project1', text: 'Software simulation of an AED device analyzing heart rhythms and providing electric shocks', title: 'AED', img: 'static/aed.jpeg', projectLink: 'https://github.com/g-kassis/AED'},
      { id: 'project2', text: 'Web Application using API to retrieve information on a given TV show' , title: 'Movies DB', img: 'static/movieDB.png', projectLink: 'https://github.com/g-kassis/imdbClone'},
      { id: 'project3', text: 'AI model classifying marine mammals from sound data' , title: 'Project Dory', img: 'static/dory.jpeg', projectLink: ''},
      { id: 'project4', text: 'Personal Website/Portfolio' , title: 'Personal Website', img: 'static/pyramids.jpeg', projectLink: 'https://github.com/g-kassis/g-kassis.github.io'},
      { id: 'project5', text: 'A Health and Fitness Club web application using PostgreSQL, Javascript, HTML and CSS' , title: 'Health and Fitness Club', img: 'static/fitness.jpg', projectLink: 'https://github.com/g-kassis/Health-and-Fitness-Club-Management-System'},
      { id: 'project6', text: '3D Simulation for brain shift using Python, PyVista and NumPy', title: 'Project Brainiac', img: 'static/brainiac.jpg', projectLink: 'https://github.com/g-kassis/Project-Brainiac'},
    ];
  
    projects.forEach(prj => {
      let col = document.createElement('div');
      col.className = 'column';
      col.id = prj.id
      col.style.borderRadius = '7px';
      col.style.border = '1px solid #0f0';
      col.style.backgroundImage = `url(${prj.img})`;
      col.style.backgroundRepeat = 'no-repeat';
      col.style.backgroundPosition = 'center';
      col.style.backgroundSize = 'cover';
      col.style.height = '190px'
  
      let overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.innerHTML = `<h3>${prj.title}</h3><p>${prj.text}</p>`;
      overlay.style.display = 'none'
  
      let githubImg = document.createElement('img');
      let link = document.createElement('a')
      link.href = prj.projectLink
      githubImg.src = 'static/githubW.png'
      githubImg.id = prj.id + 'Github'
      githubImg.className = 'gitLink'
      githubImg.style.width = '30px'
      // githubImg.style.float = 'right'
      githubImg.style.margin ='auto'
  
      link.append(githubImg)
      overlay.append(link)
  
      
  
      col.appendChild(overlay);
  
      document.getElementsByClassName('row')[0].appendChild(col)
    });
  
  }

function showServices(){
    clear();

}

function showPortfolio() {

    clear();
    
}

function showContact(){
    clear();

}




document.addEventListener('DOMContentLoaded', function () {


    // document.getElementById('home').addEventListener('click',showHome);
    // document.getElementById('about').addEventListener('click',showAbout);
    // document.getElementById('services').addEventListener('click',showServices);
    // document.getElementById('portfolio').addEventListener('click',showPortfolio);
    // document.getElementById('contact').addEventListener('click',showContact);

    //social on home page
    document.addEventListener('click', function(e){     
        if(e.target.id == 'linkedIn'){
          window.location = 'https://www.linkedin.com/in/giovanni-kassis'
        }
      });

      document.addEventListener('click', function(e){ 
        if(e.target.id == 'github'){
          window.location = 'https://github.com/g-kassis'
        }
      });

});