
function showAlart(id){
    const alartBox = document.getElementById('message')
    alartBox.classList.remove('hidden')

    document.getElementById('alert-message').innerText= id
    setTimeout(function() {
        alartBox.classList.add('hidden');
    }, 2000); 

}

// global section
const heroSection = document.getElementById('hero-section')
const footerEl = document.getElementById('footer')
let mainBlance = parseFloat(document.getElementById('main-blance').innerText);
const donateHistory = document.getElementById('donate-history')




// blog click section
document.getElementById('blog').addEventListener('click', function(){
    window.location.href ='./QA.html'  
})


// Donate and History button section
const donateTab =document.getElementById('donate-tab')
const historyTab =document.getElementById('history-tab')
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary','text-black',)
    donateTab.classList.remove('bg-primary', 'text-black')
    heroSection.classList.add('hidden')
    footerEl.classList.add('hidden')
    donateHistory.classList.remove('hidden')

})

donateTab.addEventListener('click', function(){
    donateTab.classList.add('bg-primary','text-black')
    historyTab.classList.remove('bg-primary', 'text-black')
    heroSection.classList.remove('hidden')
    footerEl.classList.remove('hidden')
    donateHistory.classList.add('hidden')
})

// donate Button-1 function
document.getElementById('donate-button1').addEventListener('click', function(){
   const donateTk = parseFloat(document.getElementById('donate-tk').innerText);
   const donateInput = parseFloat(document.getElementById('donate-input-tk').value);
   if(donateInput <= 0){
    showAlart('Minumum Amount 1tk')
    return;
   } 
   
   if(donateInput > mainBlance){
    showAlart('Not Enough Blance')
    return;
   }
   const newMain = mainBlance-donateInput;
   const totalDonate = donateTk+donateInput;
   mainBlance=newMain
   document.getElementById('main-blance').innerText=newMain;
   document.getElementById('donate-tk').innerText=totalDonate;
   showAlart('Dontion sucsessfull')
   
   const div = document.createElement('div')
   div.innerHTML=`
   <div class ="bg-gray-200 my-3 p-3 rounded-md border-l-2 border-indigo-500">
   <p class="font-lexend font-bold text-2xl">${donateInput} Taka is Donate for Flood at Noakhali, Bangladesh</p>
  <p class="font-lexend">${new Date}</p>
    
    </div>`
    donateHistory.insertBefore(div,donateHistory.firstChild)
 
    
})


// donate button-2 function
document.getElementById('donate-button2').addEventListener('click', function(){
    const donateTk =parseFloat(document.getElementById('donate-tk2').innerText);
    const donateInput =parseFloat(document.getElementById('input-tk2').value);
    if(donateInput <= 0){
        showAlart('Minumum Amount 1tk')
        return;
       } 
    
       if(donateInput > mainBlance){
        showAlart('Not Enough Blance')
        return;
       }
    const newMain = mainBlance-donateInput;
    const totalDonate = donateTk+donateInput;
    mainBlance=newMain
    document.getElementById('main-blance').innerText=newMain;
   document.getElementById('donate-tk2').innerText=totalDonate;
   showAlart('Dontion sucsessfull')

   const div = document.createElement('div')
   div.innerHTML=`
   <div class ="bg-gray-200 my-3 p-3 rounded-md border-l-2 border-indigo-500">
   <p class="font-lexend font-bold text-2xl">${donateInput} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
  <p class="font-lexend">${new Date}</p>
    
    </div>`
    donateHistory.insertBefore(div,donateHistory.firstChild)
})


// donate button-3 function
document.getElementById('donate-button3').addEventListener('click', function(){
    const donateTk =parseFloat(document.getElementById('donate-tk3').innerText);
    const donateInput =parseFloat(document.getElementById('input-tk3').value);
    if(donateInput <= 0){
        showAlart('Minumum Amount 1tk')
        return;
       } 
    
       if(donateInput > mainBlance){
        showAlart('Not Enough Blance')
        return;
       }
    const newMain = mainBlance-donateInput;
    const totalDonate = donateTk+donateInput;
    mainBlance=newMain
    document.getElementById('main-blance').innerText=newMain;
   document.getElementById('donate-tk3').innerText=totalDonate;
   showAlart('Dontion sucsessfull')

   const div = document.createElement('div')
   div.innerHTML=`
   <div class ="bg-gray-200 my-3 p-3 rounded-md border-l-2 border-indigo-500">
   <p class="font-lexend font-bold text-2xl">${donateInput} Taka is Aid for Injured in the Quota Movement</p>
  <p class="font-lexend">${new Date}</p>
    
    </div>`
    donateHistory.insertBefore(div,donateHistory.firstChild)
})