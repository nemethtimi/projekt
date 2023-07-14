const username = document.getElementById('username');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
   let messages = []
   if (username.value === '' || username.value == null){
   messages.push('Név nem található')
   }

   if (messages.length > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(',')
   }
})