const btn =document.getElementById('button')
const toasts =document.getElementById('toasts')


const  mesaages = [
      'Message One',
      'Message two',
      'Message Three',
      'Message Four'
]

btn.addEventListener('click',() => createnotification())

function createnotification()
{
      const notif =document.createElement('div')
      notif.classList.add('toast')

      notif.innerText= getrandommessage()

      toasts.appendChild(notif)

      setTimeout(() => {
            notif.remove()
      }, 2000);
}


function getrandommessage()
{
      return mesaages[Math.floor(Math.random() * mesaages.length)]
}