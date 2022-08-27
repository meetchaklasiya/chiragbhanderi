window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const text = params.get('text');
    const file = params.get('file');
    const des = params.get('des');
    const date = params.get('date');
    const time = params.get('time');
    const link = params.get('link');

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    //const name = sessionStorage.getItem('NAME');
    //const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('text').innerHTML = text;
    document.getElementById('file').innerHTML = file;
    document.getElementById('des').innerHTML = des;
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
    document.getElementById('link').innerHTML = link;

})