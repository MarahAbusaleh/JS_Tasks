const container = document.querySelector('div');
container.addEventListener('mouseover',function(){container.innerHTML='Hello world !';})
container.addEventListener('mouseout',function(){container.innerHTML='Can i help you ?';})