function onStartup(){
  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("year").innerHTML = year;
  wallpaperRandomizer();
  showPortfolio()
}

//walpaper randomizer
window.onload = onStartup;


let wallpapers = [
    { url: 'static/pxfuel1.jpg' },
    { url: 'static/pxfuel2.jpg' },
    { url: 'static/PurpleOrangeWall.jpg' },
    { url: 'static/wallpaper4.jpg' },
    { url: 'static/wallpaper3.jpg' },
];

let wallpapersMobile = [
  { url: 'static/mobile1.jpg' },
  { url: 'static/mobile2.jpg' },
  { url: 'static/mobile3.jpg' },
  { url: 'static/mobile4.jpg' },
  { url: 'static/mobile5.jpg' },
];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function wallpaperRandomizer() {
  let selectedWallpaper;
  if (window.innerWidth <= 800) {
      // Set mobile background
      selectedWallpaper = getRandomElement(wallpapersMobile);
  } else {
      // Set desktop background
      selectedWallpaper = getRandomElement(wallpapers);
  }
    
  //MORE WALLPAPERS
  //https://hellofuture.orange.com/app/uploads/2018/01/Intro-HELLO-FUTURE-1920x1080_v2.gif - neural network nodes gif
  //https://i.pinimg.com/originals/c6/33/c2/c633c20ede82f0e0ced7d570dbe3a1f3.gif - mario gif 
    document.getElementById('home').style.backgroundImage = `url(https://hellofuture.orange.com/app/uploads/2018/01/Intro-HELLO-FUTURE-1920x1080_v2.gif)`;
}



function showPortfolio(){

    let projects = [
      { id: 'project1', text: 'Software simulation that mimics the core functionality of an AED Plus (Automated External Defibrillator Plus) device allowing users to perform actions such as analyzing heart rhythms, providing electric shocks, and offering guidance during an emergency. Designed with the goal of developing a simplified software simulation of the AED Plus device to demonstrate its functionality and provide user interaction.', title: 'AED', img: 'static/aed.jpeg', projectLink: 'https://github.com/g-kassis/AED'},
      { id: 'project2', text: 'Web Application using API to retrieve information on a given TV show' , title: 'Movies DB', img: 'static/movieDB.png', projectLink: 'https://github.com/g-kassis/imdbClone'},
      { id: 'project3', text: 'Project Dory is an AI model designed to classify marine mammals from sound data utilizing deep learning techniques, such as convolutional neural networks (CNNs), and Mel-frequency cepstral coefficients (MFCCs) to classify the features of the audio data based on time and frequency. Trained on the Watkins Marine Mammal Sound Database which contains the labeled recordings of over 60 different marine mammals collected over 7 decades.' , title: 'Project Dory', img: 'static/dory.jpeg', projectLink: ''},
      { id: 'project4', text: 'Personal Website/Portfolio' , title: 'Personal Website', img: 'static/pxfuel1.jpg', projectLink: 'https://github.com/g-kassis/g-kassis.github.io'},
      { id: 'project5', text: 'A Health and Fitness Club Management System web application using SQL, Javascript, HTML and CSS. Serving as a comprehensive platform catering to the diverse needs of club members, trainers, and administrative staff. Members have access to a personalized dashboard that tracks exercise routines, fitness achievements, and health statistics. With the ability to schedule, reschedule, or cancel personal training sessions with certified trainers. While trainers are given the functionality to manage their schedules and view member profiles. Administrative Staff are equipped with features to manage room bookings, monitor fitness equipment and maintenance, update class schedules, oversee billing, and process payments for membership fees, personal training sessions, and other services.' , title: 'Health and Fitness Club', img: 'static/fitness.jpg', projectLink: 'https://github.com/g-kassis/Health-and-Fitness-Club-Management-System'},
      { id: 'project6', text: '3D Simulation for brain shift using Python, PyVista and NumPy. Providing a simulated environment that mimics real world scenarios in the operating room through the use of the BraTS 2020 dataset, which includes the segmentation of brain tumors in multimodal magnetic resonance imaging (MRI) scans.', title: 'Project Brainiac', img: 'static/brainiac.jpg', projectLink: 'https://github.com/g-kassis/Project-Brainiac'},
    ];
  
    projects.forEach(prj => {
      let button = document.createElement('button');
      button.className = 'collapsible';
      button.id = prj.id
      button.type = 'button'
      button.innerHTML = prj.title
      button.backgroundImage = `url(${prj.img})`

      let arrow = document.createElement('div');
      arrow.id = prj.id + 'arrow'
      arrow.innerHTML = '&#x25BC;'
      arrow.style.float = 'right'
      
      button.appendChild(arrow)
  
      let content = document.createElement('div');
      content.className = 'content';
      
      let paragraph = document.createElement('p')
      paragraph.textContent = prj.text
      
  
      const container = document.createElement("div");
      container.className = "container";
      container.id = "container";
  
      // Left section
      const leftDiv = document.createElement("div");
      leftDiv.className = "div1";
      leftDiv.id = "left";
  
      const screenBodyItemLeft = document.createElement("div");
      screenBodyItemLeft.className = "screen-body-item-portfolio left";
      screenBodyItemLeft.id = "screen-body-item left";

      let githubImg = document.createElement('img');
      let link = document.createElement('a')
      link.href = prj.projectLink
      githubImg.src = 'static/githubW.png'
      githubImg.id = prj.id + 'Github'
      githubImg.className = 'gitLink'
      githubImg.style.width = '30px'
      githubImg.style.float = 'left'
      githubImg.style.margin ='auto'
  
      link.append(githubImg)

      screenBodyItemLeft.append(paragraph);
      screenBodyItemLeft.append(link);
      leftDiv.append(screenBodyItemLeft);
      container.append(leftDiv);
  
      // Right section
      const rightDiv = document.createElement("div");
      rightDiv.className = "div2";
      rightDiv.id = "right";
  
      const screenBodyItemRight = document.createElement("div");
      screenBodyItemRight.className = "screen-body-item-portfolio";

      const img = document.createElement("img");
      img.id = prj.id + 'img'
      img.src = prj.img
      img.style.width = "100%"
      img.className = "projectImg"
  
      screenBodyItemRight.appendChild(img)
      rightDiv.appendChild(screenBodyItemRight);
      container.appendChild(rightDiv);
  
      // Append everything to the body
      content.appendChild(container) 
      
  
      document.getElementsByClassName('row-portfolio')[0].appendChild(button)
      document.getElementsByClassName('row-portfolio')[0].appendChild(content)

    });
  
}

// function showPrjDesc(prj){
  
//   let prjElement = document.getElementById(prj);
//   console.log(prjElement)
//   prjElement.children[0].style.display = 'block'
//   prjElement.children[0].style.backgroundColor = 'rgba(0, 0, 0, 0.6)'

//   prjElement.addEventListener('mouseleave', function(e){     

//     prjNormal(e.target.id)
//   });

// }

// function prjNormal(prj){
//   let prjElement = document.getElementById(prj);
//   prjElement.children[0].style.display = 'none'
//   prjElement.children[0].backgroundColor = 'transparent'
// }

let progArr = ['c.png','c++.png','python.png','java.png','javascript.png','html.png','css.png'];

function showProgramming() {
  for (let index = 1; index < 8; index++) {
    document.getElementById('skill'+index).childNodes[1].src = 'static/' +progArr[index-1]
    
  }
    
}

let toolsArr = ['linux.png','git.png','githubW.png','node.png','postgres.png','mongodb.png','vscode.png'];

function showTools(){
  for (let index = 1; index < 8; index++) {
    document.getElementById('skill'+index).childNodes[1].src = 'static/' +toolsArr[index-1]
    
  }

}

function handleSwitchToggle(event) {
  // Log to console or perform desired actions
  if (event.target.checked) {
      console.log('Tools');
      showTools()
  } else {
      console.log('Programming');
      showProgramming()
  }
}


document.addEventListener('DOMContentLoaded', function () {




    document.addEventListener('click', function(e){     
      if(e.target.id == 'filter'){
        handleSwitchToggle(e)
      }
    });

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

      //portfolio hover on project
      // document.addEventListener('mouseover', function(e){     
      //   if(e.target.id.includes('project')){
      //       showPrjDesc(e.target.id)
      //   }
      // });

      

       //project on click
       document.addEventListener('click', function(e){ 
        if(e.target.id.includes('project')){
          let projectSelected = document.getElementById(e.target.id).nextElementSibling
          if (projectSelected.style.display === "block") {
            projectSelected.style.display = "none";
            let b = document.getElementById(e.target.id)
            document.getElementById(b.id+'arrow').innerHTML = '&#x25BC;'
          } else {
            projectSelected.style.display = "block";
            let b = document.getElementById(e.target.id)
            document.getElementById(b.id+'arrow').innerHTML = '&#x25B2;'
          }
        }
      });

      //hire me button (scroll to contact)
      document.addEventListener('click', function(e){     
        if(e.target.id == 'hire'){
          document.getElementById("contact").scrollIntoView();
        }
      });

      //on mail send button
      document.addEventListener('click', function(e){ 
        if(e.target.id == 'sendMail'){
          // console.log('herre')
          // document.getElementById("emailField").style.display = "none"
          // document.getElementById("messageField").style.display = "none"
        }
      });

      //when in view listners

      function isInViewport(element) {
        // Get the bounding client rectangle position in the viewport
        var bounding = element.getBoundingClientRect();
        
        // Checking partial visibility
        if (
            bounding.top < window.innerHeight && 
            bounding.bottom > 0 && 
            bounding.left < window.innerWidth && 
            bounding.right > 0
        ) {
            console.log('Partially in the viewport! :)');
            return true;
        } else {
            console.log('Not in the viewport. :(');
            return false;
        }
    }
    let timeout;
    window.addEventListener('scroll', function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const servicesElement = document.getElementById('row-services');
        const servicesElement2 = document.getElementById('row-services2');
        const portfolioScroll = document.getElementById('row-portfolio')
        const contactForm = document.getElementById('terminalBody')
        console.log(contactForm)

        //my services on scroll
        if(window.innerWidth <= 800){

          for (let i = 1; i < 7; i++) {
            let ser = document.getElementById('columnService'+i)
            if (isInViewport(ser)) {
              if(i % 2 !== 0){ //even
                ser.style.visibility = ''
                ser.classList.add('rs2');
              }else{ //odd
                ser.style.visibility = ''
                ser.classList.add('rs');
              }

            } else {
              if(i % 2 !== 0){ //even
                ser.style.visibility = 'hidden'
                ser.classList.remove('rs2');
              }else{ //odd
                ser.style.visibility = 'hidden'
                ser.classList.remove('rs');
              }
            }
          }
          
        }else{
          if (isInViewport(servicesElement) || isInViewport(servicesElement2)) {
            servicesElement.style.visibility = ''
            servicesElement2.style.visibility = ''
            servicesElement.classList.add('rs');
            servicesElement2.classList.add('rs2');
          } else {
            // servicesElement.classList.remove('in-view');
            servicesElement.style.visibility = 'hidden'
            servicesElement2.style.visibility = 'hidden'
            servicesElement.classList.remove('rs');
            servicesElement2.classList.remove('rs2');
          }
        }
          
        //contact form
          if(isInViewport(contactForm)){
            contactForm.style.visibility = ''
            contactForm.classList.add('cs');
          }else{
            contactForm.style.visibility = 'hidden'
            contactForm.classList.remove('cs');
          }


          //porfolio projects
          if(isInViewport(portfolioScroll)){
            const items = document.querySelectorAll("#row-portfolio button");
            console.log(items)
            items.forEach((item) => {
              item.classList.add("animate"); // Add animation class to all items
            });
          }else{
            const items = document.querySelectorAll("#row-portfolio button");
            items.forEach((item) => {
              item.classList.remove("animate"); // Add animation class to all items
            });
          }
        
        
      }, 50); // Adjust the delay as needed
    });

});