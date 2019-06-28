const card = document.querySelector('.card');
const offerBox = document.querySelector('.offerBox');
const title = document.querySelector('header > h1');

const offer1 = document.querySelector('.offer1');
const offer2 = document.querySelector('.offer2');
const offer3 = document.querySelector('.offer3');

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const modalHeader = document.querySelector('.modal-header h2');
const modalBody = document.querySelector('.modal-body p');

card.addEventListener('click', clickCard);

function clickCard(){
    
    card.style.animation = '0.3s ease-in-out 0s 1 slideInFromBottom';
    
    offerBox.style.animation = '0.6s ease-in-out 0s 1 slideInFromRight';
    setTimeout(addFloat, 800);
    offerBox.style.display = 'flex';
    
    title.style.animation = 'fadeIn 0.6s';
    title.innerHTML = 'Choose a card';
}

function addFloat(){
    offerBox.style.animation = 'float 3s ease-out infinite';
}

offer1.addEventListener('click', cOffer1);

function cOffer1(e){
    modal.style.display = "block";
    modalHeader.innerHTML = '<h2>King Reward</h2>';
    modalBody.innerHTML = '<p> Grab your special Father Day treats by earning Points from Slots and Table Games! <br><br> Prize redemption: June 16, 2019 <br><br> Area 3, Ground Floor Garden Wing and Membership Counter, Ground Floor Grand Wing <br><br> Open to all RWM male members on a first come, first served basis. <br><br> Terms and conditions apply. Proceed to the Membership Counter for inquiries. <br><br> Gaming for 21 years old and above only. Keep it fun. Game responsibly.</p>';
}

offer2.addEventListener('click', cOffer2);

function cOffer2(){
    modal.style.display = "block";
    modalHeader.innerHTML = '<h2>Super 7</h2>';
    modalBody.innerHTML = '<p>SUPER 7 PAYS <br><br>20 to 1<br><br>ON THREE (3) CARDS<br><br>Available on No Commission baccarat tables.<br><br>Gaming for 21 years old and above only. Keep it fun. Game responsibly.</p>'
}

offer3.addEventListener('click', cOffer3);

function cOffer3(){
    modal.style.display = "block";
    modalHeader.innerHTML = '<h2>Daily Bonus Rewards</h2>';
    modalBody.innerHTML = '<p>Get instant prizes, extra slots credits and gaming chips <br><br> based on Points earned daily via cash play on slots and table games. <br><br>Earn Points from Mondays to Thrusdays<br><br> February 4 to December 19, 2019 <br><br>Rewards Redemption (Mondays- Thursdays) <br><br> Lucky Corner, Ground Floor Garden Wing <br><br> Promotion Counter, Ground Floor Grand Wing</p>'
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}