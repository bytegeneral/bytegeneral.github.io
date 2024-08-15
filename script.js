
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

function start(){
    let currentPage = window.location.href
    if(currentPage.includes('home') || currentPage.includes('about') || currentPage.includes('services') || currentPage.includes('portfolio') || currentPage.includes('contact')){
        onRefresh()
    }else{
        window.location = currentPage += '#home'
        showHome()
    }   

}

function onRefresh(){
    let currentPage = window.location.href
    window.location = currentPage.split('#')[0] + '#home'
    showHome()
}

function clear(){
    let content = document.getElementById('content')
    content.innerHTML = ''
    
}

function showHome() {
    clear();

    let headline = document.createElement('DIV')
    headline.className = 'headline'

    let name = document.createElement('p')
    name.className = 'gradient-text'
    name.id = 'name'
    name.innerHTML = 'GIOVANNI KASSIS'

    let title = document.createElement('p')
    title.className = 'title'
    title.innerHTML = 'SOFTWARE DEV'

    let content = document.getElementById('content')
    headline.appendChild(name)
    headline.appendChild(title)
    content.appendChild(headline)


}

function showAbout() {
    clear();
    

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


function prevPage(){
    let currentPage = window.location.href    

    if(currentPage.includes('home')){
        window.location = currentPage.replace('#home', '#contact')
        showContact()

    }else if(currentPage.includes('about')){
        window.location = currentPage.replace('#about', '#home')
        showHome()

    }else if(currentPage.includes('services')){
        window.location = currentPage.replace('#services', '#about')
        showAbout()

    }else if(currentPage.includes('portfolio')){
        window.location = currentPage.replace('#portfolio', '#services')
        showServices()

    }else if(currentPage.includes('contact')){
        window.location = currentPage.replace('#contact', '#portfolio')
        showPortfolio()

    }else{
        console.log('unkown')
    }

}

function nextPage(){
    let currentPage = window.location.href

    if(currentPage.includes('home')){
        window.location = currentPage.replace('#home', '#about')
        showAbout()

    }else if(currentPage.includes('about')){
        window.location = currentPage.replace('#about', '#services')
        showServices()

    }else if(currentPage.includes('services')){
        window.location = currentPage.replace('#services', '#portfolio')
        showPortfolio()

    }else if(currentPage.includes('portfolio')){
        window.location = currentPage.replace('#portfolio', '#contact')
        showContact()

    }else if(currentPage.includes('contact')){
        window.location = currentPage.replace('#contact', '#home')
        showHome()

    }else{
        console.log('unkown')
    }
}   



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nextButton').addEventListener('click', nextPage);
    document.getElementById('prevButton').addEventListener('click', prevPage);

    window.addEventListener("unload", function(reload) {
        let currentPage = window.location.href
        window.location = currentPage.split('#')[0] + '#home'
   });

    // document.getElementById('home').addEventListener('click',showHome);
    // document.getElementById('about').addEventListener('click',showAbout);
    // document.getElementById('services').addEventListener('click',showServices);
    // document.getElementById('portfolio').addEventListener('click',showPortfolio);
    // document.getElementById('contact').addEventListener('click',showContact);

    // document.addEventListener('mouseover', function(e){     
    //     if(e.target.id.toString().includes('card-card')){
    //         onProject(e.target.id.toString().charAt(e.target.id.toString().length-1));
    //     }
    //   });

    //   document.addEventListener('mouseout', function(e){     
    //     if(e.target.id.toString().includes('card-card')){
    //         offProject(e.target.id.toString().charAt(e.target.id.toString().length-1));
    //     }
    //   });
});