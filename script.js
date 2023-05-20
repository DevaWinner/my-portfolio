// ============ Mobile Pop up Menu ==========================
function toggleMenu() {
  const menuIcon = document.querySelector('.nav-icon');
  const menu = document.querySelector('.nav-links-container');
  const logo = document.querySelector('.logo');

  menuIcon.classList.toggle('open');
  menu.classList.toggle('open');
  logo.classList.toggle('hidden');

  if (menuIcon.classList.contains('open')) {
    menuIcon.innerHTML = '<i class="fa fa-times fa-xl"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars fa-xl"></i>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-links-container a');
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', () => {
      toggleMenu();
    });
  }
});

// ====== Storing dynamic content of works section in variables ===========
const projectContents = [
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },
  {
    heading: 'Multi-Post Stories <br> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './assets/desktop-snap.png',
    stackItems: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    liveVersion: 'https://example.com/live-version-1',
    source: 'https://github.com/example/project-1',
    buttonText: 'See Project',
    popHeading: 'Keeping track of hundreds of components',
    popupStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
  },

];

// ========== Details pop up ===================

function closePopup() {
  const popupContainer = document.querySelector('.popup-container');
  document.body.removeChild(popupContainer);
}

function openPopup(itemContent) {
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '<i class="fas fa-times fa-lg"></i>';
  closeButton.addEventListener('click', closePopup);

  const popupImage = document.createElement('img');
  popupImage.src = itemContent.image;
  popupImage.className = 'popup-image';

  const titleContainer = document.createElement('div');
  titleContainer.className = 'popup-title-container';

  const popupTitle = document.createElement('h1');
  popupTitle.innerHTML = itemContent.popHeading;

  const buttons = document.createElement('div');
  buttons.className = 'buttons-desktop';

  let seeLiveButton = document.createElement('button');
  seeLiveButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i> ';
  seeLiveButton.addEventListener('click', () => {
    window.open(itemContent.liveVersion, '_blank');
  });

  let seeSourceButton = document.createElement('button');
  seeSourceButton.innerHTML = 'See Source <i class="fab fa-github"></i>';
  seeSourceButton.addEventListener('click', () => {
    window.open(itemContent.source, '_blank');
  });

  buttons.appendChild(seeLiveButton);
  buttons.appendChild(seeSourceButton);

  titleContainer.appendChild(popupTitle);
  titleContainer.appendChild(buttons);

  const stackContainer = document.createElement('ul');
  stackContainer.className = 'stack-container';

  itemContent.popupStack.forEach((stackItem) => {
    const stackItemElement = document.createElement('li');
    stackItemElement.className = 'stack-item';
    stackItemElement.innerHTML = stackItem;
    stackContainer.appendChild(stackItemElement);
  });

  const popupDescription = document.createElement('p');
  popupDescription.innerHTML = itemContent.description;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'popup-buttons';

  seeLiveButton = document.createElement('button');
  seeLiveButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i> ';
  seeLiveButton.addEventListener('click', () => {
    window.open(itemContent.liveVersion, '_blank');
  });

  seeSourceButton = document.createElement('button');
  seeSourceButton.innerHTML = 'See Source <i class="fab fa-github"></i>';
  seeSourceButton.addEventListener('click', () => {
    window.open(itemContent.source, '_blank');
  });

  buttonsContainer.appendChild(seeLiveButton);
  buttonsContainer.appendChild(seeSourceButton);

  popupContent.appendChild(closeButton);
  popupContent.appendChild(popupImage);
  popupContent.appendChild(titleContainer);
  popupContent.appendChild(stackContainer);
  popupContent.appendChild(popupDescription);
  popupContent.appendChild(buttonsContainer);

  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
}

// =========== Creating dynamic content for works section ============

const cardContainer = document.createElement('div');
cardContainer.className = 'card-container';

projectContents.forEach((itemContent) => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardItem = document.createElement('div');
  cardItem.className = 'card-item';

  const heading = document.createElement('h1');
  heading.innerHTML = itemContent.heading;

  const stackContainer = document.createElement('ul');
  stackContainer.className = 'stack-container';

  itemContent.stackItems.forEach((stackItem) => {
    const li = document.createElement('li');
    li.className = 'stack-item';
    li.innerHTML = stackItem;
    stackContainer.appendChild(li);
  });

  const projectButton = document.createElement('div');
  projectButton.className = 'project-button';

  const button = document.createElement('button');
  button.innerHTML = itemContent.buttonText;

  button.addEventListener('click', () => {
    openPopup(itemContent);
  });

  projectButton.appendChild(button);
  cardItem.appendChild(heading);
  cardItem.appendChild(stackContainer);
  cardItem.appendChild(projectButton);
  card.appendChild(cardItem);
  cardContainer.appendChild(card);
});

const targetElement = document.querySelector('#work');
targetElement.appendChild(cardContainer);

// =========== Form Validation ============

function validateEmail(event) {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  if (emailInput.checkValidity()) {
    const email = emailInput.value.trim();
    const isLowerCase = email === email.toLowerCase();

    if (isLowerCase) {
      errorMessage.style.display = 'none';
    } else {
      errorMessage.textContent = 'Please enter the email in lowercase.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    }
  }
}

const form = document.getElementById('emailForm');
form.addEventListener('submit', validateEmail);