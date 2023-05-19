// ============ Mobile Pop up Menu ==========================
function toggleMenu() {
  var menuIcon = document.querySelector('.nav-icon');
  var menu = document.querySelector('.nav-links-container');
  var logo = document.querySelector('.logo');

  menuIcon.classList.toggle('open');
  menu.classList.toggle('open');
  logo.classList.toggle('hidden');

  if (menuIcon.classList.contains('open')) {
    menuIcon.innerHTML = '<i class="fa fa-times fa-xl"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars fa-xl"></i>';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.nav-links-container a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      toggleMenu();
    });
  }
});

// ====== Storing dynamic content of works section in variables ===========
var projectContents = [
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  {
    heading: "Multi-Post Stories <br> Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./assets/desktop-snap.png",
    stackItems: ["Ruby on Rails", "JavaScript", "CSS", "HTML"],
    liveVersion: "https://example.com/live-version-1",
    source: "https://github.com/example/project-1",
    buttonText: "See Project",
    popHeading: "Keeping track of hundreds of components"
  },
  
];

// =========== Creating dynamic content for works section ============

var cardContainer = document.createElement("div");
cardContainer.className = "card-container";

projectContents.forEach(function (itemContent) {
  var card = document.createElement("div");
  card.className = "card";

  var cardItem = document.createElement("div");
  cardItem.className = "card-item";

  var heading = document.createElement("h1");
  heading.innerHTML = itemContent.heading;

  var stackContainer = document.createElement("ul");
  stackContainer.className = "stack-container";

  itemContent.stackItems.forEach(function (stackItem) {
    var li = document.createElement("li");
    li.className = "stack-item";
    li.innerHTML = stackItem;
    stackContainer.appendChild(li);
  });

  var projectButton = document.createElement("div");
  projectButton.className = "project-button";

  var button = document.createElement("button");
  button.innerHTML = itemContent.buttonText;

  button.addEventListener("click", function () {
    openPopup(itemContent);
  });

  projectButton.appendChild(button);
  cardItem.appendChild(heading);
  cardItem.appendChild(stackContainer);
  cardItem.appendChild(projectButton);
  card.appendChild(cardItem);
  cardContainer.appendChild(card);
});

var targetElement = document.querySelector("#work");
targetElement.appendChild(cardContainer);

// ========== Details pop up ===================

function openPopup(itemContent) {
  var popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";

  var popupContent = document.createElement("div");
  popupContent.className = "popup-content";

  var closeButton = document.createElement("span");
  closeButton.className = "close-button";
  closeButton.innerHTML = '<i class="fas fa-times fa-lg"></i>';
  closeButton.addEventListener("click", closePopup);

  var popupImage = document.createElement("img");
  popupImage.src = itemContent.image;
  popupImage.className = "popup-image";

  var titleContainer = document.createElement("div");
  titleContainer.className = "popup-title-container";

  var popupTitle = document.createElement("h1");
  popupTitle.innerHTML = itemContent.popHeading;

  var buttons = document.createElement("div");
  buttons.className = "buttons-desktop";

  var seeLiveButton = document.createElement("button");
  seeLiveButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i> ';
  seeLiveButton.addEventListener("click", function () {
  window.open(itemContent.liveVersion, "_blank");
  });

  var seeSourceButton = document.createElement("button");
  seeSourceButton.innerHTML = 'See Source <i class="fab fa-github"></i>';
  seeSourceButton.addEventListener("click", function () {
  window.open(itemContent.source, "_blank");
  });

  buttons.appendChild(seeLiveButton);
  buttons.appendChild(seeSourceButton);

  titleContainer.appendChild(popupTitle);
  titleContainer.appendChild(buttons);


  var stackContainer = document.createElement("ul");
  stackContainer.className = "stack-container";

  itemContent.stackItems.forEach(function (stackItem) {
    var stackItemElement = document.createElement("li");
    stackItemElement.className = "stack-item";
    stackItemElement.innerHTML = stackItem;
    stackContainer.appendChild(stackItemElement);
  });

  var popupDescription = document.createElement("p");
  popupDescription.innerHTML = itemContent.description;

  var buttonsContainer = document.createElement("div");
  buttonsContainer.className = "popup-buttons";

  var seeLiveButton = document.createElement("button");
  seeLiveButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i> ';
  seeLiveButton.addEventListener("click", function () {
    window.open(itemContent.liveVersion, "_blank");
  });

  var seeSourceButton = document.createElement("button");
  seeSourceButton.innerHTML = 'See Source <i class="fab fa-github"></i>';
  seeSourceButton.addEventListener("click", function () {
    window.open(itemContent.source, "_blank");
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

function closePopup() {
  var popupContainer = document.querySelector('.popup-container');
  document.body.removeChild(popupContainer);
}