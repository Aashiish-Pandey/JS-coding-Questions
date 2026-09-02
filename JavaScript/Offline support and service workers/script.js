// Register the service worker

if(navigator.serviceWorker)  {
    navigator.serviceWorker.register('./sw.js' ,{
        scope:'./'
    }).then(res=>{
        console.log('service worker registered successfully')
    })
}