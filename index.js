// global section
const heroSection = document.getElementById('hero-section')



// Donate and History button section
const donateTab =document.getElementById('donate-tab')
const historyTab =document.getElementById('history-tab')
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary','text-black',)
    donateTab.classList.remove('bg-primary', 'text-black')
    heroSection.classList.add('hidden')

})

donateTab.addEventListener('click', function(){
    donateTab.classList.add('bg-primary','text-black')
    historyTab.classList.remove('bg-primary', 'text-black')
    heroSection.classList.remove('hidden')
})

// blog click section
document.getElementById('blog').addEventListener('click', function(){
    window.location.href ='./QA.html'
})