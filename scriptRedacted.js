var speed = 50; // Typing speed in milliseconds
let messages = [
  { id: 'msg1', text: 'Welcome to Terminal' },
  { id: 'msg2', text: 'Initializing System...' },
  { id: 'msg3', text: 'Loading Resources...' },
  { id: 'msg4', text: '' },
  { id: 'msg5', text: '' },
  { id: 'msg6', text: 'Please Select an Option (by clicking): ' },
  { id: 'aboutNav', text: '1. ABOUT' },
  { id: 'servicesNav', text: '2. SERVICES' },
  { id: 'portfolioNav', text: '3. PORTFOLIO' },
  { id: 'contactNav', text: '4. CONTACT' },
];

function clearTerminal(){

  document.getElementById('textTerminal').innerHTML = ''

}

function typeWriter(elementId, txt, callback) {
  let i = 0;

  function type() {
    if (i < txt.length) {
      document.getElementById(elementId).innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback(); // Call the callback function when typing is done
    }
  }

  type();
}

function onStart() {
  // Array of messages and corresponding element IDs
  

  let textTerminal = document.getElementById('textTerminal');

  // Create elements for each message
  messages.forEach(msg => {
    let newLine = document.createElement('p');
    newLine.className = 'loader-text';
    newLine.id = msg.id;
    textTerminal.appendChild(newLine);
    if(msg.id == 'aboutNav' || msg.id == 'servicesNav' || msg.id == 'portfolioNav' || msg.id == 'contactNav'){
        document.getElementById(msg.id).style.cursor = 'pointer'
        document.getElementById(msg.id).style.width = 'fit-content'
        
    }
  });

  // Function to start typing each message sequentially
  function typeNextMessage(index) {
    if (index < messages.length) {
      typeWriter(messages[index].id, messages[index].text, function() {
        typeNextMessage(index + 1); // Call the next message after finishing the current one
      });
    }
  }

  typeNextMessage(0); // Start with the first message
}

function addText(where, textArr, callback) {
  let textTerminal = document.getElementById(where);

  // Create elements for each message
  textArr.forEach(msg => {
    let newLine = document.createElement('p');
    newLine.className = 'loader-text';
    newLine.id = msg.id;
    if(newLine.id.includes('title')){
      newLine.style.fontWeight = "900"
      newLine.style.fontSize = '20px'
    }else if(newLine.id.includes('text')){
      newLine.style.fontSize = '14px'
    }
    textTerminal.appendChild(newLine);
    
    
  });

  // Function to start typing each message sequentially
  function typeNextMessage(index) {
    if (index < textArr.length) {
      typeWriter(textArr[index].id, textArr[index].text, function() {
        typeNextMessage(index + 1); // Call the next message after finishing the current one
      });
    } else if (callback) {
      callback(); // Call the callback function when all messages are done
    }
  }

  typeNextMessage(0); // Start with the first message
}

function showAbout() {
  messages = [
    { id: 'msg1', text: 'About' },
    { id: 'msg2', text: 'Name: GIOVANNI KASSIS' },
    { id: 'msg3', text: 'Sex: MALE' },
    { id: 'msg4', text: 'ALMA MATER: Carleton University' },
    { id: 'msg5', text: 'DEGREE: Computer Science' },
    { id: 'msg6', text: 'LANGUAGES: English, French, Arabic' },
  ];

  let img = document.createElement('img');
  img.src = 'static/memoji.png';
  img.style.width = '65%';
  img.id = 'pfp';

  let textTerminal = document.createElement('div');
  textTerminal.id = 'textTerminal';

  let div1 = document.getElementById('left');
  div1.innerHTML = '';
  let div2 = document.getElementById('right');
  div1.appendChild(img);
  div2.appendChild(textTerminal);

  //button to hire
  let button = document.createElement('button')
  button.id = 'hire'
  button.innerHTML = 'Hire Me'
  
  div2.appendChild(button)

  //download resume
  let rButton = document.createElement('button')
  rButton.id = 'resume'
  rButton.innerHTML = 'Download CV'
  
  div2.appendChild(rButton)


  onStart();

  document.getElementById('pfp').style.display = 'block';

  let services1 = [
    { id: 'service1-title', text: 'Software Development'},
    { id: 'service1-text', text: 'Building robust desktop applications using languages like C++, Java, or Python'},]
  let services2 = [ { id: 'service2-title', text: 'Web Development'},
    { id: 'service2-text', text: 'Full-stack development using technologies like HTML, CSS, JavaScript, React, Angular, Node.js'},]
  let services3 = [ { id: 'service3-title', text: 'Software Consulting' },
    { id: 'service3-text', text: 'Providing strategic advice on technology adoption, system architecture, and digital transformation'},]
  let services4 = [ { id: 'service4-title', text: 'Database Management' },
    { id: 'service4-text', text: 'Designing and managing databases like PostgreSQL and MongoDB'},]
  let services5 = [ { id: 'service5-title', text: 'Cybersecurity' },
    { id: 'service5-text', text: 'Conducting security assessments and penetration testing to identify vulnerabilities. Securing applications, databases and authentication'},]
  let services6 = [  { id: 'service6-title', text: 'Tutoring' },
    { id: 'service6-text', text: 'Basics of programming in languages like Python, Java, C++, or JavaScript. Understanding algorithms, data structures, and object-oriented programming'},]


      addText('service1', services1, function() {
        let serviceImage = document.createElement('img')
        serviceImage.src = 'static/software.png'
        serviceImage.id = 'serviceImage'
        let serviceElement = document.getElementById('service1');
          let firstChild = serviceElement.firstChild;
      
          // Insert the image after the first child
          serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

        addText('service2', services2, function() {
          let serviceImage = document.createElement('img')
          serviceImage.src = 'static/web-development.png'
          serviceImage.id = 'serviceImage'

          let serviceElement = document.getElementById('service2');
          let firstChild = serviceElement.firstChild;
      
          // Insert the image after the first child
          serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

          addText('service3', services3, function() {
            let serviceImage = document.createElement('img')
            serviceImage.src = 'static/consulting.png'
            serviceImage.id = 'serviceImage'
            let serviceElement = document.getElementById('service3');
            let firstChild = serviceElement.firstChild;
      
            // Insert the image after the first child
            serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

            addText('service4', services4, function() {
              let serviceImage = document.createElement('img')
              serviceImage.src = 'static/databases.png'
              serviceImage.id = 'serviceImage'
              let serviceElement = document.getElementById('service4');
              let firstChild = serviceElement.firstChild;
      
              // Insert the image after the first child
              serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

              addText('service5', services5, function() {
                let serviceImage = document.createElement('img')
                serviceImage.src = 'static/cybersecurity.png'
                serviceImage.id = 'serviceImage'
                let serviceElement = document.getElementById('service5');
                let firstChild = serviceElement.firstChild;
                
                // Insert the image after the first child
                serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

                addText('service6', services6, function() {
                  let serviceImage = document.createElement('img')
                  serviceImage.src = 'static/tutoring.png'
                  serviceImage.id = 'serviceImage'
                  document.getElementById('service6').appendChild(serviceImage)
                  let serviceElement = document.getElementById('service6');
                  let firstChild = serviceElement.firstChild;
              
                  // Insert the image after the first child
                  serviceElement.insertBefore(serviceImage, firstChild.nextSibling);
                  
                 //button to hire
                  let button = document.createElement('button')
                  button.id = 'hire'
                  button.innerHTML = 'Hire Me'
                  
                  document.getElementById('terminalBody').appendChild(button)
                });
              });
            });
          });
        });
      });
}

function showServices(){

  let services1 = [
    { id: 'service1-title', text: 'Software Development'},
    { id: 'service1-text', text: 'Building robust desktop applications using languages like C++, Java, or Python'},]
  let services2 = [ { id: 'service2-title', text: 'Web Development'},
    { id: 'service2-text', text: 'Full-stack development using technologies like HTML, CSS, JavaScript, React, Angular, Node.js'},]
  let services3 = [ { id: 'service3-title', text: 'Software Consulting' },
    { id: 'service3-text', text: 'Providing strategic advice on technology adoption, system architecture, and digital transformation'},]
  let services4 = [ { id: 'service4-title', text: 'Database Management' },
    { id: 'service4-text', text: 'Designing and managing databases like PostgreSQL and MongoDB'},]
  let services5 = [ { id: 'service5-title', text: 'Cybersecurity' },
    { id: 'service5-text', text: 'Conducting security assessments and penetration testing to identify vulnerabilities. Securing applications, databases and authentication'},]
  let services6 = [  { id: 'service6-title', text: 'Tutoring' },
    { id: 'service6-text', text: 'Basics of programming in languages like Python, Java, C++, or JavaScript. Understanding algorithms, data structures, and object-oriented programming'},]


      addText('service1', services1, function() {
        let serviceImage = document.createElement('img')
        serviceImage.src = 'static/software.png'
        serviceImage.id = 'serviceImage'
        let serviceElement = document.getElementById('service1');
          let firstChild = serviceElement.firstChild;
      
          // Insert the image after the first child
          serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

        addText('service2', services2, function() {
          let serviceImage = document.createElement('img')
          serviceImage.src = 'static/web-development.png'
          serviceImage.id = 'serviceImage'

          let serviceElement = document.getElementById('service2');
          let firstChild = serviceElement.firstChild;
      
          // Insert the image after the first child
          serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

          addText('service3', services3, function() {
            let serviceImage = document.createElement('img')
            serviceImage.src = 'static/consulting.png'
            serviceImage.id = 'serviceImage'
            let serviceElement = document.getElementById('service3');
            let firstChild = serviceElement.firstChild;
      
            // Insert the image after the first child
            serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

            addText('service4', services4, function() {
              let serviceImage = document.createElement('img')
              serviceImage.src = 'static/databases.png'
              serviceImage.id = 'serviceImage'
              let serviceElement = document.getElementById('service4');
              let firstChild = serviceElement.firstChild;
      
              // Insert the image after the first child
              serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

              addText('service5', services5, function() {
                let serviceImage = document.createElement('img')
                serviceImage.src = 'static/cybersecurity.png'
                serviceImage.id = 'serviceImage'
                let serviceElement = document.getElementById('service5');
                let firstChild = serviceElement.firstChild;
                
                // Insert the image after the first child
                serviceElement.insertBefore(serviceImage, firstChild.nextSibling);

                addText('service6', services6, function() {
                  let serviceImage = document.createElement('img')
                  serviceImage.src = 'static/tutoring.png'
                  serviceImage.id = 'serviceImage'
                  document.getElementById('service6').appendChild(serviceImage)
                  let serviceElement = document.getElementById('service6');
                  let firstChild = serviceElement.firstChild;
              
                  // Insert the image after the first child
                  serviceElement.insertBefore(serviceImage, firstChild.nextSibling);
                  
                 //button to hire
                  let button = document.createElement('button')
                  button.id = 'hire'
                  button.innerHTML = 'Hire Me'
                  
                  document.getElementById('terminalBody').appendChild(button)
                });
              });
            });
          });
        });
      });


}


document.addEventListener('DOMContentLoaded', function () {

    //nav on Terminal intro (about, services, portfolio and contact)
    document.addEventListener('click', function(e){     
        if(e.target.id == 'aboutNav'){
            document.getElementById('Access').style.display = ''
            clearTerminal()
            document.getElementById('Access').style.display = 'none'
            window.location.pathname = '/aboutCLI.html'
        }
      });

      document.addEventListener('click', function(e){     
        if(e.target.id == 'servicesNav'){
          document.getElementById('Access').style.display = ''
          clearTerminal()
          document.getElementById('Access').style.display = 'none'
          window.location.pathname = '/servicesCLI.html'
          
        }
      });

      document.addEventListener('click', function(e){     
        if(e.target.id == 'portfolioNav'){
          document.getElementById('Access').style.display = ''
          clearTerminal()
          document.getElementById('Access').style.display = 'none'
          window.location.pathname = '/portfolioCLI.html'
          showPortfolio()
        }
      });
      document.addEventListener('click', function(e){     
        if(e.target.id == 'contactNav'){
            document.getElementById('Access').style.display = ''
            clearTerminal()
            document.getElementById('Access').style.display = 'none'
            window.location.pathname = '/contactCLI.html'
        }
      });

      //About Page
      

      //services page
      document.addEventListener('click', function(e){     
        if(e.target.id == 'hire'){
          window.location.pathname = '/contactCLI.html'
        }
      });

      //portfolio page


      //contact Page
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
      document.addEventListener('click', function(e){     
        if(e.target.id == 'sendMail'){
          
        }
      });

});